import { useEffect, useRef, useState } from 'react';
import QrScanner from 'qr-scanner';
import styles from "./QRScanner.module.css"
import { VideoOff } from 'lucide-react';

export function QRScanner({ onScanSuccess }){
    const videoRef = useRef(null);
    const qrScannerRef = useRef(null);
    const timerId = useRef(-1);
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isCameraOn, setIsCameraOn] = useState(true);
    const activeCameraTimer = 130000;

    function restartTimer() {
        if (timerId.current > 0) {
            clearTimeout(timerId.current);
        }
        setIsCameraOn(true);
        timerId.current = setTimeout(() => {
            stopScanner();
            setIsCameraOn(false);
        }, activeCameraTimer);
    }

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
                if (isProcessing) return;
                setIsProcessing(true);
                restartTimer()
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
                maxScansPerSecond: 1,
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
        if (isCameraOn) {
            bindCamera();
            startScanner();
        }

        restartTimer();

        return () => {
            stopScanner();
            if (timerId.current > 0) {
                clearTimeout(timerId.current);
            }
        };
    }, [onScanSuccess, isProcessing]);

    const handleReactivateCamera = async () => {
        restartTimer();
        await new Promise(resolve => setTimeout(resolve, 100));
        bindCamera();
        startScanner();
    };

    if (hasPermission === false) {
        return (
            <div className="permission-error">
                <p style={{color: "red"}}>Не удалось получить доступ к камере. Пожалуйста, проверьте настройки разрешений вашего браузера.</p>
            </div>
        );
    }

    return (
        <>
            <div className={styles.container}>
                <video
                    ref={videoRef}
                    className={isCameraOn ? styles.qrvideo : styles.hidden}
                ></video>

                {!isCameraOn && (
                    <div
                        onClick={handleReactivateCamera}
                        className={styles.qrvideo}
                    >
                        <VideoOff
                            className={styles.cameraIcon}
                        />
                        <h3>Камера выключена</h3>
                        <h3>Нажмите, чтобы включить снова</h3>
                    </div>
                )}
            </div>
        </>
    );
}