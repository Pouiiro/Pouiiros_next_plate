import { Button } from '@/components/ui/button'
import type { PostResponse } from '@/types/apiResponse'
import Link from 'next/link'

type Props = {
	readonly data: PostResponse
}

export const PostResult = ({ data: { data } }: Props) => {
	return (
		<div
			className='flex justify-center items-center flex-col
      gap-8'>
			<h1>{data.notification}</h1>
			<p>
				Message: <span className='text-green-400'>{data.message}</span>
			</p>
			<Button type='submit' variant='secondary'>
				<Link href='/test-api'>Go back</Link>
			</Button>
		</div>
	)
}
