import Link from 'next/link'

import { Button } from '@/components/ui/button'

const notFound = () => {
	return (
		<div className='flex flex-col justify-center items-center h-screen w-screen gap-3'>
			<h1 className='font-bold'>404 - Not found</h1>
			<p className='font-semibold'>The requested content is not available</p>
			<Button variant='outline'>
				<Link href='/'>Go back home</Link>
			</Button>
		</div>
	)
}

export default notFound
