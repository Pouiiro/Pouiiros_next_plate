import Link from 'next/link'

import { getURL } from '@/app/_utils'
import { Button } from '@/components/ui/button'
import type { GetResponse } from '@/types/apiResponse'

const GetExample = async () => {
	const response = await fetch(getURL('/api/helloworld'), {
		method: 'GET'
	})
	const result: GetResponse = await response.json()

	return (
		<main className='flex min-h-screen flex-col items-center justify-center gap-6 p-24'>
			<h1 id='items-heading' className='font-semibold'>
				GET result:
			</h1>
			<div className='flex flex-row w-fit gap-10 '>
				<div className='flex flex-col gap-5 w-fit'>
					<p>Message -&gt;</p>
					<p>Status -&gt;</p>
					<p>Data -&gt;</p>
				</div>
				<div className='flex flex-col gap-5 w-fit'>
					<p>{result.message}</p>
					<p>{result.status}</p>
					<p>{result.data}</p>
				</div>
			</div>

			<Link href='/test-api'>
				<Button>Go back</Button>
			</Link>
		</main>
	)
}

export default GetExample
