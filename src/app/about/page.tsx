"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Link from "next/link"

const About = () => {
	const items = [
		"shadcn",
		"darkmode",
		"lucide react",
		"react hook form",
		"zod",
		"tailwind",
		"next themes",
		"biome"
	]

	return (
		<main className="flex min-h-screen flex-col items-center justify-center gap-6 p-24">
			<Label>List of things included:</Label>
			<ul>
				{items.map((label) => (
					<li key={label}>* {label}</li>
				))}
			</ul>

			<Link href="/">
				<Button>Go back home</Button>
			</Link>
		</main>
	)
}

export default About
