import type {ReactNode} from "react";

type props = {
    children: ReactNode
}

export function ProtectedRoute({children}: props) {

    return (
        <>
            {children}
        </>
    )
}
