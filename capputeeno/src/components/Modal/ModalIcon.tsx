import { ReactNode } from 'react';

interface ModalIconProps {
    icon?: ReactNode
}

export function ModalIcon({ icon }: ModalIconProps) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
        }}>
            {icon}
        </div>
    )
}