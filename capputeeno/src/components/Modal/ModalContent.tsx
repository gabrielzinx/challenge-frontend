import { ReactNode } from "react"

interface ModalContent {
    children?: ReactNode
}

export function ModalContent({ children }: ModalContent) {
    return (
        <p style={{
            fontFamily: "var(--font-default)",
            color: "#999999",
            width: "100%",
            fontSize: "14px",
            fontWeight: 400,
            height: "42px",
            lineHeight: "22px",
            textAlign: "center",
            textSizeAdjust: "100%"
        }}>
            {children}
        </p>

    )
}