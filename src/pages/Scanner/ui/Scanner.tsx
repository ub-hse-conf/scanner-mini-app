import {useNavigate, useParams} from "react-router";
import { useEffect, useRef, useState } from 'react';
import { MoveLeft } from 'lucide-react';
import {QRScanner} from "../../../features/QRScanner";
import styles from "./Scanner.module.css"
import {Button} from "../../../shared/ui/Button";
import {enqueueSnackbar} from "notistack";
import {useGetActivityById, useRegisterUser} from "../../../features/activity";
import {Loading} from "../../../shared/ui/Loading";
import {Error as ErrorComponent} from "../../../shared/ui/Error";

export function Scanner(){

    const navigate = useNavigate();
    const params = useParams();
    const [activityName, setActivityName] = useState<string>();
    const [activityId, setActivityId] = useState<number>();
    const {
        mutateAsync: register,
        isError,
        isSuccess,
        error: registerError,
    } = useRegisterUser()
    const {
        data: activity,
        isError: isActivityError,
        isLoading: isActivityLoading
    } = useGetActivityById(activityId)


    useEffect(() => {
        if (params.activity) {
            setActivityId(Number(params.activity));
        }
    }, [params])

    useEffect(() => {
        if (activity) {
            setActivityName(activity.name);
        }
    }, [activity]);

    useEffect(() => {
        if (isError) {

            let messge = `Ошибка!`

            if (registerError) {
                const status = registerError?.response?.status;

                if (status && status === 409) {
                    messge += " Пользователь уже зарегистрирован"
                }
                else if (status && status === 404 || status && status === 400) {
                    messge += " Пользователь не найден"
                }
            }

            enqueueSnackbar(messge, {
                autoHideDuration: 3000,
                variant: 'error',
            })

            if (window.Telegram.WebApp) {
                window.Telegram.WebApp.HapticFeedback.notificationOccurred("error")
            }

        }


    }, [isError]);

    useEffect(() => {
        if (isSuccess){
            enqueueSnackbar(`Пользователь добавлен!`, {
                autoHideDuration: 3000,
                variant: 'success',
            })

            if (window.Telegram.WebApp) {
                window.Telegram.WebApp.HapticFeedback.notificationOccurred("success")
            }
        }
    }, [isSuccess]);

    const handleScanSuccess = async (qrData: string) => {

        if (activityId && qrData.toLowerCase().startsWith("unu")) {
            console.log("Отправляем на бэк")
            await register({
                userCode: qrData,
                activityId: activityId
            })
        }
        else {
            enqueueSnackbar(`Данный код не поддерживается`, {
                autoHideDuration: 3000,
                variant: "default",
            })
        }
    };


    return (
        <>
            {
                isActivityLoading ?
                    <Loading />
                    :
                    isActivityError ?
                        <ErrorComponent />
                        :
                        <div className={styles.container}>
                            {activityName && <h1 style={{color: "red"}}>{activityName}</h1>}
                            <Button
                                onClick={() => {
                                    navigate(-1)
                                }}
                            >
                                <MoveLeft/>
                                {" "}
                                {`Назад`}
                            </Button>
                            <br/>
                            <QRScanner onScanSuccess={handleScanSuccess}/>
                        </div>
            }
        </>
    )
}
