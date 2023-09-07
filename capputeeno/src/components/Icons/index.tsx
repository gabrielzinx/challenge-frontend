import React, { SVGProps } from "react"

export function SvgSearch(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none" {...props}>
            <circle cx="12.059" cy="12.0586" r="7.06194" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21.0034 21.0033L17.0518 17.0517" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export function SvgShoppingBag({ svg, path }: { svg?: SVGProps<SVGSVGElement>, path?: SVGProps<SVGPathElement> }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...svg}>
            <path d="M4 7V5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V7" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...path} />
            <path fillRule="evenodd" clipRule="evenodd" d="M20 7H4C3.44772 7 3 7.44772 3 8V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V8C21 7.44772 20.5523 7 20 7Z" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...path} />
            <path d="M16 11C16 13.2091 14.2091 15 12 15C9.79086 15 8 13.2091 8 11" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...path} />
        </svg>
    )
}

export function SvgArrowDown(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M8 10L12 14L16 10" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export function SvgArrowLeft(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M14 16L10 12L14 8" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export function SvgArrowRight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M10 16L14 12L10 8" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export function SvgButtonBack(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M18.3639 5.63604C21.8787 9.15076 21.8787 14.8492 18.3639 18.3639C14.8492 21.8787 9.15074 21.8787 5.63604 18.3639C2.12132 14.8492 2.12132 9.15074 5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.3639 5.63604" stroke="#617480" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 13L7.5 10.5L10 8" stroke="#617480" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.5 16H12.75C14.269 16 15.5 14.769 15.5 13.25V13.25C15.5 11.731 14.269 10.5 12.75 10.5H11.5H7.5" stroke="#617480" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>)
}

export function SvgButtonTrash(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
            <path fillRule="evenodd" clipRule="evenodd" d="M16.1378 21H7.85782C6.81082 21 5.94082 20.192 5.86282 19.147L4.96582 7H18.9998L18.1328 19.142C18.0578 20.189 17.1868 21 16.1378 21V21Z" stroke="#DE3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 11V17" stroke="#DE3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 7H20" stroke="#DE3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 7L15.987 4.298C15.694 3.517 14.948 3 14.114 3H9.886C9.052 3 8.306 3.517 8.013 4.298L7 7" stroke="#DE3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.4298 11L14.9998 17" stroke="#DE3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.57016 11L9.00016 17" stroke="#DE3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export function SvgCancelAction(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none" {...props}>
            <line x1="20.9393" y1="38.9393" x2="38.9393" y2="20.9393" stroke="#F15E5E" strokeWidth="3" />
            <line x1="21.0607" y1="20.9393" x2="39.0607" y2="38.9393" stroke="#F15E5E" strokeWidth="3" />
            <circle cx="30.25" cy="30.75" r="28.75" stroke="#F15E5E" strokeWidth="3" />
        </svg>
    )
}

export function SvgConfirmAction(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none" {...props}>
            <path d="M30 60C13.4512 60 0 46.5488 0 30C0 13.4512 13.4512 0 30 0C46.5488 0 60 13.4512 60 30C60 46.5488 46.5488 60 30 60ZM30 4.18605C15.7674 4.18605 4.18605 15.7674 4.18605 30C4.18605 44.2326 15.7674 55.814 30 55.814C44.2326 55.814 55.814 44.2326 55.814 30C55.814 15.7674 44.2326 4.18605 30 4.18605Z" fill="#08F33C" />
            <path d="M26.0356 39.9911C25.4775 39.9911 24.9472 39.7678 24.5566 39.3771L16.6587 31.4795C15.8494 30.6702 15.8494 29.3306 16.6587 28.5213C17.468 27.712 18.8076 27.712 19.6169 28.5213L26.0356 34.9399L40.3798 20.5957C41.1891 19.7864 42.5286 19.7864 43.3379 20.5957C44.1472 21.405 44.1472 22.7446 43.3379 23.5539L27.5147 39.3771C27.124 39.7678 26.5938 39.9911 26.0356 39.9911Z" fill="#08F33C" />
        </svg>
    )
}