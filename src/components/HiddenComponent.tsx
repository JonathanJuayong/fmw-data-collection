import React, {ReactNode} from "react";

interface HiddenComponentProps {
    children: ReactNode,
    condition: boolean,
}

export default function HiddenComponent({children, condition}: HiddenComponentProps) {
    return (
        <>
            {condition && children}
        </>
    )
}
