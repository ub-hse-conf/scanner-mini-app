import {useNavigate, useParams} from "react-router";
import { useEffect, useRef, useState } from 'react';
import { MoveLeft } from 'lucide-react';
import {QRScanner} from "../../../features/QRScanner";
import styles from "./Scanner.module.css"
import {Button} from "../../../shared/ui/Button";

export function Scanner(){

    const navigate = useNavigate();
    const params = useParams();
    const [activity, setActivity] = useState<string>();


    useEffect(() => {
        if (params.activity) {
            setActivity(params.activity);
        }
    }, [params])

    const handleScanSuccess = async (qrData) => {
        alert(`Отсканировано: ${qrData}`)

        // try {
        //     // Отправляем асинхронный запрос на бэкенд
        //     const response = await fetch('https://your-backend.com/api/scan', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(scanData),
        //     });
        //
        //     if (!response.ok) {
        //         throw new Error(`Ошибка HTTP: ${response.status}`);
        //     }
        //
        //     const result = await response.json();
        //     console.log('Данные успешно отправлены на сервер:', result);
        //
        //     // Можно показать краткое уведомление об успехе (например, через toast-либу)
        //     // toast.success('Участник успешно отсканирован!');
        //
        // } catch (error) {
        //     console.error('Ошибка при отправке данных:', error);
        // }
    };


    return (
        <div className={styles.container}>
            {activity && <h1 style={{color: "red"}}>{activity}</h1>}
            <Button
                onClick={() => {
                    navigate(-1)
                }}
            >
                <MoveLeft />
                {" "}
                {`Назад`}
            </Button>
            <br/>
            <QRScanner onScanSuccess={handleScanSuccess}/>
        </div>
    )
}
