import { ButtonHTMLAttributes, CSSProperties, MouseEvent } from "react";

interface ModalActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: string,
    style?: CSSProperties,
    hoverStyle?: CSSProperties
}

export function ModalAction({ children, hoverStyle, style, ...rest }: ModalActionProps) {
    const defaultStyles: CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 400ms',
        border: '0',
        borderRadius: '4px',
        color: '#fff',
        backgroundColor: '#c1c1c1',
        fontFamily: 'var(--font-default)',
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: "19.5px",
        padding: "10px 24px",
        textAlign: "center",
        cursor: 'pointer',
    };

    const hoverStyles = { ...hoverStyle };

    const mergedStyles = { ...defaultStyles, ...style };

    const handleMouseEnter = (e: MouseEvent<HTMLButtonElement>) => {
        const target = e.currentTarget;
        Object.assign(target.style, hoverStyles);
    };

    const handleMouseLeave = (e: MouseEvent<HTMLButtonElement>) => {
        const target = e.currentTarget;
        Object.assign(target.style, mergedStyles);
    };

    return (
        <button
            style={mergedStyles}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...rest}
        >
            {children}
        </button>
    );
}
