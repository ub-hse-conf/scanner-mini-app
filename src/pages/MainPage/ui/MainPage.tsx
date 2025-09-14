import {useNavigate, useSearchParams} from "react-router";
import {useGetActivities} from "../../../features/activity";

import styles from "./MainPage.module.css"
import {Button} from "../../../shared/ui/Button";
import {Accordion} from "../../../shared/ui/Accordion";
import type {Activity} from "../../../shared/api/generated";

export function MainPage() {

    const navigate = useNavigate();
    const {data: activities, isFetching, isError} = useGetActivities()

    return (
        <div className={styles.container}>
            {
                isFetching ?
                    <h1>Загружаем данные...</h1>
                    :
                    isError ?
                        <h1>Ошибка!</h1>
                        :
                        <>
                            <Accordion
                                name={"Конкурс проектов"}
                            >
                                <div className={styles.content}>
                                    {

                                        activities?.data.filter((activity: Activity) => (
                                            activity.activityType === "CONTEST"
                                        )).map((activity: Activity, index:number) => (
                                            <Button
                                                key={index}
                                                color={"red"}
                                                onClick={() => {
                                                    navigate(`/scanner/${activity.id}`)
                                                }}
                                            >
                                                {activity.name}
                                            </Button>
                                        ))
                                    }
                                </div>
                            </Accordion>
                            <Accordion
                                name={"Мастер-классы компаний"}
                            >
                                <div className={styles.content}>
                                    {

                                        activities?.data.filter((activity: Activity) => (
                                            activity.activityType === "WORKSHOP"
                                        )).map((activity: Activity, index:number) => (
                                            <Button
                                                key={index}
                                                color={"orange"}
                                                onClick={() => {
                                                    navigate(`/scanner/${activity.id}`)
                                                }}
                                            >
                                                {activity.name}
                                            </Button>
                                        ))
                                    }
                                </div>
                            </Accordion>
                            <Accordion
                                name={"TED-лекции"}
                            >
                                <div className={styles.content}>
                                    {

                                        activities?.data.filter((activity: Activity) => (
                                            activity.activityType === "LECTURE"
                                        )).map((activity: Activity, index:number) => (
                                            <Button
                                                key={index}
                                                color={"yellow"}
                                                onClick={() => {
                                                    navigate(`/scanner/${activity.id}`)
                                                }}
                                            >
                                                {activity.name}
                                            </Button>
                                        ))
                                    }
                                </div>
                            </Accordion>
                        </>
            }
        </div>
    )
}

