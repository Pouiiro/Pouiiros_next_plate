"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export const ThemeToggler = () => {
	const { theme, setTheme } = useTheme()
	const [isClient, setIsClient] = useState(false)

	// Prevent hydration mismatch
	useEffect(() => {
		setIsClient(true)
	}, [])

	if (!isClient) {
		return null
	}

	return (
		<button
			className={
				"w-fit absolute right-5 top-2 p-2 hover:scale-110 active:scale-100 duration-200"
			}
			type="button"
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
			{theme === "dark" ? (
				<Sun className="duration-0" />
			) : (
				<Moon className="duration-0" />
			)}
		</button>
	)
}
