import {type ButtonHTMLAttributes, type ReactNode} from "react"
import type {color} from "../../../utils/Types.ts";
import styles from "./Button.module.css"

type props = {
    children?: ReactNode;
    color?: color
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({children, color, ...props}: props) {

    const textColor: color = "white";

    if (!color) {
        color = "blue"
    }
    // if (["green", "blue", "violet", "red", "darkblue"].includes(color)) {
    //     textColor = "white"
    // }
    // else {
    //     textColor = "black"
    // }
    return (
        <button
            {...props}
            style={{
                backgroundColor: `var(--color-${color}-primary)`,
                width: "100%",
                padding: "8px",
                border: "none",
                borderRadius: "8px",
                color: textColor,
                fontSize: "14px",
                fontWeight: "bold",
            }}
            className={styles.button}
        >
            {children}
        </button>
    )
}
