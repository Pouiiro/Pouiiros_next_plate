import { ThemeProvider } from "next-themes"
import type { ReactNode } from "react"

type Props = {
	children: ReactNode | ReactNode[]
}

const Providers = ({ children }: Props) => {
	return (
		<ThemeProvider enableSystem attribute="class" defaultTheme="dark">
			{children}
		</ThemeProvider>
	)
}

export default Providers
