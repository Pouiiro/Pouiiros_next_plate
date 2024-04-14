import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"
import type { ReactNode } from "react"

import { ThemeToggler } from "@/components/common/themeToggler"
import { cn } from "@/lib/utils"
import Providers from "@/providers/providers"
import { themeSetter } from "@/scripts/theme"
import "@/styles/globals.css"

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans"
})

export const metadata: Metadata = {
	title: "Pouiiro's next plate",
	description:
		"Pouiiro's next plate is a nextjs boilerplate with basic needs."
}

type Props = {
	readonly children: ReactNode | ReactNode[]
}

export default function RootLayout({ children }: Props) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				{themeSetter && (
					// biome-ignore lint/security/noDangerouslySetInnerHtml: <need this to fix theme flicker>
					<script dangerouslySetInnerHTML={{ __html: themeSetter }} />
				)}
			</head>
			<body
				className={cn(
					"min-h-screene font-sans antialiased transition-all duration-200",
					fontSans.variable
				)}>
				<Providers>
					<ThemeToggler />
					{children}
				</Providers>
			</body>
		</html>
	)
}
