import { Spinner } from '@/components/common/spinner'

const loading = () => (
	<div className='flex justify-center items-center w-screen h-screen flex-col gap-5'>
		<Spinner />
		<h1>Posting...</h1>
	</div>
)

export default loading
