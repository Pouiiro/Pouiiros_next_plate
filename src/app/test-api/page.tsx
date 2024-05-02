import Link from 'next/link'

import { Button } from '@/components/ui/button'

const About = () => {
	return (
		<main className='flex min-h-screen flex-col items-center justify-center gap-6 p-24'>
			<h1 id='items-heading' className='font-semibold'>
				API test
			</h1>
			<div className='flex flex-row gap-5'>
				<Link href='/test-api/get-example'>
					<Button>GET</Button>
				</Link>
				<Link href='/test-api/post-example'>
					<Button>POST</Button>
				</Link>
			</div>
			<Link href='/'>
				<Button>Go back</Button>
			</Link>
		</main>
	)
}

export default About
