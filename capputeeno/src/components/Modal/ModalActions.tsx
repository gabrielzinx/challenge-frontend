import { ReactNode } from "react";

interface ModalActionsProps {
    children: ReactNode
}

export function ModalActions({ children }: ModalActionsProps) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent:' center',
            alignItems: 'center',
            width: '100%',
            gap: '16px'
        }}>
            {children}
        </div>
    )
}