"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import { items } from "@/constants/about"

const About = () => {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center gap-6 p-24">
			<h1 id="items-heading" className="font-semibold">
				List of things included:
			</h1>
			<ul aria-label="items-heading">
				{items.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>

			<Link href="/">
				<Button>Go back home</Button>
			</Link>
		</main>
	)
}

export default About
