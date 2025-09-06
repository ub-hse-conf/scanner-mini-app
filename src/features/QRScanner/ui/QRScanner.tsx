import { useEffect, useRef, useState } from 'react';
import QrScanner from 'qr-scanner';

export function QRScanner({ onScanSuccess }){
    const videoRef = useRef(null);
    const qrScannerRef = useRef(null);
    const [hasPermission, setHasPermission] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false); // Чтобы не обрабатывать несколько кодов сразу

    useEffect(() => {
        if (!videoRef.current) return;

        // Инициализация сканера
        qrScannerRef.current = new QrScanner(
            videoRef.current,
            (result) => {
                if (isProcessing) return; // Если уже обрабатываем предыдущий код, игнорируем новый
                setIsProcessing(true);
                console.log('Decoded qr code:', result.data);

                // Вызываем переданный извне колбэк
                onScanSuccess(result.data)
                    .then(() => {
                        // После успешной отправки на бэкенд разрешаем сканировать следующий код
                        setIsProcessing(false);
                    })
                    .catch((err) => {
                        console.error('Ошибка при обработке QR-кода:', err);
                        setIsProcessing(false); // Разрешаем сканировать снова даже в случае ошибки
                    });
            },
            {
                highlightScanRegion: true, // Подсвечивает область, которую сканирует
                highlightCodeOutline: true, // Подсвечивает контур распознанного QR-кода
                preferredCamera: 'environment', // Используем тыльную камеру по умолчанию
            }
        );

        // Запуск сканера
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

    const switchCamera = () => {
        if (qrScannerRef.current) {
            // `getCameras` возвращает промис, поэтому используем then/catch
            qrScannerRef.current.getCameras().then((cameras) => {
                if (cameras.length > 1) {
                    const currentCamera = qrScannerRef.current.getCamera();
                    const currentIndex = cameras.findIndex(cam => cam.id === currentCamera?.id);
                    const nextCamera = cameras[(currentIndex + 1) % cameras.length];
                    qrScannerRef.current.setCamera(nextCamera);
                }
            }).catch(console.error);
        }
    };

    if (hasPermission === false) {
        return (
            <div className="permission-error">
                <p style={{color: "red"}}>Не удалось получить доступ к камере. Пожалуйста, проверьте настройки разрешений вашего браузера.</p>
            </div>
        );
    }

    return (
        <div className="scanner-container">
            {/* Элемент video, куда будет транслироваться камера */}
            <video
                ref={videoRef}
                className="qr-video"
                style={{ width: '100%', height: 'auto', maxHeight: '70vh' }}
            ></video>

            {/* Индикатор обработки */}
            {isProcessing && (
                <div className="processing-overlay">
                    <p>Обработка QR-кода...</p>
                </div>
            )}

            {/* Кнопка для переключения камеры (опционально) */}
            <button onClick={switchCamera} className="switch-camera-btn">
                Переключить камеру
            </button>
        </div>
    );
};
