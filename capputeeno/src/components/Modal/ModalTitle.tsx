interface ModalTitle {
    children?: string
}

export function ModalTitle({ children }: ModalTitle) {
    return (
        <h1 style={{
            fontFamily: 'var(--font-default)',
            color: '#636363',
            width: '100%',
            fontSize: '26px',
            fontWeight: 500,
            lineHeight: '36px',
            textAlign: 'center'
        }}>
            {children}
        </h1>
    )
}