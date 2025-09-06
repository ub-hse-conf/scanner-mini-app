import { useEffect, useRef, useState } from 'react';
import QrScanner from 'qr-scanner';

export function QRScanner({ onScanSuccess }){
    const videoRef = useRef(null);
    const qrScannerRef = useRef(null);
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [isProcessing, setIsProcessing] = useState(false); // Чтобы не обрабатывать несколько кодов сразу

    useEffect(() => {
        if (!videoRef.current) return;

        qrScannerRef.current = new QrScanner(
            videoRef.current,
            (result) => {
                if (isProcessing) return; // Если уже обрабатываем предыдущий код, игнорируем новый
                setIsProcessing(true);
                console.log('Decoded qr code:', result.data);

                onScanSuccess(result.data)
                    .then(() => {
                        setIsProcessing(false);
                    })
                    .catch((err) => {
                        console.error('Ошибка при обработке QR-кода:', err);
                        setIsProcessing(false);
                    });
            },
            {
                highlightScanRegion: true,
                highlightCodeOutline: true,
                preferredCamera: 'environment',
            }
        );


        const startScanner = async () => {
            try {
                await qrScannerRef.current.start();
                setHasPermission(true);
            } catch (err) {
                console.error('Ошибка доступа к камере:', err);
                setHasPermission(false);
            }
        };
        startScanner();

        // Остановка сканера при размонтировании компонента
        return () => {
            if (qrScannerRef.current) {
                qrScannerRef.current.stop();
                qrScannerRef.current.destroy();
            }
        };
    }, [onScanSuccess, isProcessing]); // Зависимости от колбэка и флага обработки


    if (hasPermission === false) {
        return (
            <div className="permission-error">
                <p style={{color: "red"}}>Не удалось получить доступ к камере. Пожалуйста, проверьте настройки разрешений вашего браузера.</p>
            </div>
        );
    }

    return (
        <div className="scanner-container">
            <video
                ref={videoRef}
                className="qr-video"
                style={{ width: '100%', height: 'auto', maxHeight: '70vh' }}
            ></video>

            {isProcessing && (
                <div className="processing-overlay">
                    <p>Обработка QR-кода...</p>
                </div>
            )}
        </div>
    );
}
