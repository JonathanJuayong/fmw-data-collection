import {Container} from "@mantine/core";
import {ReactElement} from "react";

interface LayoutProps {
    children: Array<ReactElement> | ReactElement
}

export default function Layout({children}: LayoutProps) {
    return (
        <Container size="sm">
            {children}
        </Container>
    )
}
