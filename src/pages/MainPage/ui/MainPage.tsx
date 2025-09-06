import {useNavigate} from "react-router";
import {useGetActivity} from "../../../features/activity/api/GetActivity.ts";

import styles from "./MainPage.module.css"
import {Button} from "../../../shared/ui/Button";
import {Accordion} from "../../../shared/ui/Accordion";

export function MainPage() {

    const navigate = useNavigate();
    const activities = useGetActivity()

    return (
        <div className={styles.container}>
            <Accordion
                name={"Основные"}
            >
                <div className={styles.content}>
                    {
                        <Button
                            color={"red"}
                            onClick={() => {
                                navigate(`/scanner/Конкурс проектов`)
                            }}
                        >
                            {"Конкурс проектов"}
                        </Button>
                    }
                </div>
            </Accordion>
            <Accordion
                name={"Мастер-классы компаний"}
            >
                <div className={styles.content}>
                    {
                        activities.map((activity, index) => (
                            <Button
                                key={index}
                                onClick={() => {
                                    navigate(`/scanner/${activity}`)
                                }}
                            >
                                {activity}
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
                        activities.map((activity, index) => (
                            <Button
                                key={index}
                                color={"yellow"}
                                onClick={() => {
                                    navigate(`/scanner/${activity}`)
                                }}
                            >
                                {activity}
                            </Button>
                        ))
                    }
                </div>
            </Accordion>
        </div>
    )
}

