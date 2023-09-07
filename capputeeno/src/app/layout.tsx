import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Capputeeno',
    description: 'Um E-commerce para venda de canecas e camisetas.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br">
            <body>{children}</body>
        </html>
    )
}