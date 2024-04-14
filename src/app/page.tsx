"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center gap-6 p-24">
			<Label>Hello world and welcome to Pouiiro&rsquo;s next 🍽️</Label>
			<Link href="/about">
				<Button>What is included?</Button>
			</Link>
		</main>
	)
}
