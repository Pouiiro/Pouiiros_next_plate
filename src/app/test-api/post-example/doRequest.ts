'use server'

import { getURL } from '@/app/_utils'

export const postData = async <T, P>(values: T) => {
	try {
		const response = await fetch(getURL('/api/helloworld'), {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(values)
		})
		const result = (await response.json()) as P

		return result
	} catch (error) {
		console.error(error)
		throw new Error('Could not post the data, check the console for more info.')
	}
}
