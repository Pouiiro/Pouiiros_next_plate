import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import type { ReactNode } from 'react'

import '@/app/globals.css'
import { ThemeToggler } from '@/components/common/themeToggler'
import ThemeProvider from '@/context/themeProvider'
import { cn } from '@/lib/utils'
import { themeSetter } from '@/scripts/theme'

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
})

export const metadata: Metadata = {
    title: "Pouiiro's next plate",
    description:
        "Pouiiro's next plate is a nextjs boilerplate with basic needs.",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <html lang='en' suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeSetter! }} />
            </head>
            <body
                className={cn(
                    'min-h-screene font-sans antialiased transition-all duration-200',
                    fontSans.variable
                )}
            >
                <ThemeProvider>
                    <ThemeToggler />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
