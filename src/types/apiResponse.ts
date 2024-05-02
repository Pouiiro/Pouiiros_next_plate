export type CommonResponse = {
	readonly message: string
	readonly status: number
}

export type PostResponse = CommonResponse & {
	readonly data: {
		readonly notification: string
		readonly message: string
	}
}

export type GetResponse = CommonResponse & {
	readonly data: string
}
