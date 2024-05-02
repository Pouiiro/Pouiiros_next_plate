'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-center gap-6 p-24'>
			<h1 className='font-semibold'>
				Hello world and welcome to Pouiiro&rsquo;s next 🍽
			</h1>
			<Link href='/about'>
				<Button className='w-40'>What is included?</Button>
			</Link>
			<Link href='/test-api'>
				<Button className='w-40'>API test</Button>
			</Link>
		</main>
	)
}
