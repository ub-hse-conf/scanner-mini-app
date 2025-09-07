import { useEffect, useRef, useState } from 'react';
import QrScanner from 'qr-scanner';
import styles from "./QRScanner.module.css"
import { VideoOff } from 'lucide-react';

export function QRScanner({ onScanSuccess }){
    const videoRef = useRef(null);
    const qrScannerRef = useRef(null);
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const lastScannedCode = useRef<string | null>(null);
    const lastScanTime = useRef<number>(0);
    const scanCooldown = 2000; // 2 секунды задержки между сканированиями

    function stopScanner() {
        if (qrScannerRef.current) {
            qrScannerRef.current.stop();
            qrScannerRef.current.destroy();
            qrScannerRef.current = null;
        }
    }

    function bindCamera() {
        if (!videoRef.current) {
            console.error('Video element is not available');
            return;
        }

        stopScanner();

        qrScannerRef.current = new QrScanner(
            videoRef.current,
            (result) => {
                const now = Date.now();
                const timeSinceLastScan = now - lastScanTime.current;

                // Проверяем, не сканировали ли мы этот код недавно
                if (isProcessing ||
                    (result.data === lastScannedCode.current && timeSinceLastScan < scanCooldown)) {
                    return;
                }

                setIsProcessing(true);
                lastScannedCode.current = result.data;
                lastScanTime.current = now;

                console.log('Decoded qr code:', result.data);

                onScanSuccess(result.data)
                    .then(() => {
                        // После успешной обработки снимаем блокировку через короткое время
                        setTimeout(() => setIsProcessing(false), 500);
                    })
                    .catch((err) => {
                        console.error('Ошибка при обработке QR-кода:', err);
                        // В случае ошибки тоже снимаем блокировку
                        setTimeout(() => setIsProcessing(false), 500);
                    });
            },
            {
                highlightScanRegion: true,
                highlightCodeOutline: true,
                preferredCamera: 'environment',
                maxScansPerSecond: 5, // Ограничиваем частоту сканирования
            }
        );
    }

    async function startScanner() {
        try {
            if (qrScannerRef.current) {
                await qrScannerRef.current.start();
                setHasPermission(true);
            }
        } catch (err) {
            console.error('Ошибка доступа к камере:', err);
            setHasPermission(false);
        }
    }

    useEffect(() => {
        bindCamera();
        startScanner();

        return () => {
            stopScanner();
        };
    }, [onScanSuccess]);

    if (hasPermission === false) {
        return (
            <div className="permission-error">
                <p style={{color: "red"}}>Не удалось получить доступ к камере. Пожалуйста, проверьте настройки разрешений вашего браузера.</p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <video
                ref={videoRef}
                className={styles.qrvideo}
            ></video>
        </div>
    );
}