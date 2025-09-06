import {type ReactNode, useState} from "react";
import { ChevronDown, ChevronUp } from 'lucide-react';


type accordionProps = {
    children?: ReactNode;
    name?: string;
}

export function Accordion({children, name}:accordionProps) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div
            style={{
                margin: "0 16px 0 16px",
                color: "lightgray",
                fontSize: "24px",
                font: "Calibri",
            }}
        >
            <div
                onClick={() => {setExpanded(!expanded)}}
            >
                <p>
                    {name} 
                    {' '}
                    {expanded ? <ChevronUp /> : <ChevronDown />}
                </p>
            </div>
            {expanded && (
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    {children}
                </div>
            )}
        </div>
    )

}
