const timeout = (ms: number) =>
	new Promise((resolve) => setTimeout(resolve, ms))

type PostData = {
	readonly name: string
	readonly message: string
}

export async function POST(req: Request) {
	await timeout(1000)

	const body: PostData = await req.json()

	return Response.json({
		message: 'ok',
		status: 200,
		data: {
			notification: `Hi ${body.name}, message received :)`,
			message: body.message
		}
	})
}

export async function GET() {
	// simulate API call time
	await timeout(1000)

	// return data
	return Response.json({
		message: 'ok',
		status: 200,
		data: 'Hello world'
	})
}
