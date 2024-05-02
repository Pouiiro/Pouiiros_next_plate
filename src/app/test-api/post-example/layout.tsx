import type { ReactNode } from 'react'

type Props = {
	readonly children: ReactNode | ReactNode[]
}

export default function Layout({ children }: Props) {
	return (
		<main className='flex min-h-screen flex-col items-center justify-center gap-6 p-24'>
			{children}
		</main>
	)
}
