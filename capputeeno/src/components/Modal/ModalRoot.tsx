import { HTMLAttributes, ReactNode } from 'react';

interface ModalRootProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

export function ModalRoot({ children, ...rest }: ModalRootProps) {
    return (
        <section style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: '5px',
            padding: '32px',
            width: '360px',
            position: 'absolute',
            top: 'calc(50vh - 145px)',
            left: 'calc(50vw - 170px)',
            gap: '16px',
            backgroundColor: '#fff',
        }} {...rest}>
            {children}
        </section>
    )
}