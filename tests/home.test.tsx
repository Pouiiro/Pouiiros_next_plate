import { render, screen } from "@testing-library/react"
import { expect, test } from "vitest"

import Page from "@/app/page"

test("Home page", () => {
	render(<Page />)
	const header = screen.getByRole("heading", {
		level: 1,
		name: "Hello world and welcome to Pouiiro’s next 🍽️"
	})
	const button = screen.getByRole("button", { name: "What is included?" })

	expect(header).toBeDefined()
	expect(button).toBeDefined()
})
