'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

import { PostResult } from '@/app/test-api/post-example/postResult'
import { Button } from '@/components/ui/button'
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import type { PostResponse } from '@/types/apiResponse'
import { postData } from './doRequest'
import Loading from './loading'

const formSchema = z.object({
	name: z.string().min(2, {
		message: 'Name must be at least 2 characters.'
	}),
	message: z.string().min(2, {
		message: 'Message must be at least 2 characters.'
	})
})

type FormValues = z.infer<typeof formSchema>

const PrePostExample = () => {
	const [data, setData] = useState<PostResponse>()
	const [isLoading, setLoading] = useState(false)

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			message: ''
		}
	})

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		setLoading(true)

		try {
			const response = await postData<z.infer<typeof formSchema>, PostResponse>(
				values
			)

			setData(response)
			setLoading(false)
		} catch (error) {
			console.error(error)
			setLoading(false)
		}
	}

	if (isLoading) {
		return <Loading />
	}

	if (data) {
		return <PostResult data={data} />
	}

	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
				<FormField
					control={form.control}
					name='name'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input placeholder='Name' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='message'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Message</FormLabel>
							<FormControl>
								<Input placeholder='Short message' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className='flex flex-row gap-5 justify-center items-center'>
					<Button
						type='submit'
						disabled={form.formState.isSubmitting || !form.formState.isValid}>
						Submit
					</Button>
					<Button type='submit' variant='secondary'>
						<Link href='/test-api'>Go back</Link>
					</Button>
				</div>
			</form>
		</FormProvider>
	)
}

export default PrePostExample
