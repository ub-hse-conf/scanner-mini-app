import { useEffect, useRef, useState } from 'react';
import QrScanner from 'qr-scanner';
import styles from "./QRScanner.module.css"
import { VideoOff } from 'lucide-react';

export function QRScanner({ onScanSuccess }) {
    const videoRef = useRef(null);
    const qrScannerRef = useRef(null);
    const timerId = useRef(-1);
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isCameraOn, setIsCameraOn] = useState(true);
    const activeCameraTimer = 130000;

    // Функция для перезапуска таймера
    const restartTimer = () => {
        if (timerId.current > 0) {
            clearTimeout(timerId.current);
        }
        setIsCameraOn(true);
        timerId.current = setTimeout(() => {
            if (qrScannerRef.current) {
                qrScannerRef.current.stop();
            }
            setIsCameraOn(false);
        }, activeCameraTimer);
    };

    // Инициализация сканера один раз при монтировании
    useEffect(() => {
        if (!videoRef.current) return;

        // Создаем сканер только один раз
        qrScannerRef.current = new QrScanner(
            videoRef.current,
            (result) => {
                if (isProcessing) return;
                setIsProcessing(true);
                restartTimer();

                onScanSuccess(result.data)
                    .then(() => {
                        setIsProcessing(false);
                    })
                    .catch((err) => {
                        console.error('Ошибка при обработке QR-кода:', err.response.data.message);
                        setIsProcessing(false);
                    });
            },
            {
                highlightScanRegion: true,
                highlightCodeOutline: true,
                preferredCamera: 'environment',
                maxScansPerSecond: 1,
            }
        );

        // Запускаем сканер
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
        restartTimer();

        // Очистка при размонтировании компонента
        return () => {
            if (qrScannerRef.current) {
                qrScannerRef.current.destroy();
                qrScannerRef.current = null;
            }
            if (timerId.current > 0) {
                clearTimeout(timerId.current);
            }
        };
    }, []); // Пустой массив зависимостей - инициализация только один раз

    // Обработчик реактивации камеры
    const handleReactivateCamera = async () => {
        if (qrScannerRef.current) {
            try {
                await qrScannerRef.current.start();
                setIsCameraOn(true);
                restartTimer();
            } catch (err) {
                console.error('Ошибка при запуске камеры:', err);
                setHasPermission(false);
            }
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
        <div className={styles.container}>
            <video
                ref={videoRef}
                className={isCameraOn ? styles.qrvideo : styles.hidden}
            ></video>

            {!isCameraOn && (
                <div
                    onClick={handleReactivateCamera}
                    className={styles.qrvideo}
                    style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}
                >
                    <VideoOff
                        className={styles.cameraIcon}
                        size={48}
                    />
                    <h3>Камера выключена</h3>
                    <h3>Нажмите, чтобы включить снова</h3>
                </div>
            )}
        </div>
    );
}