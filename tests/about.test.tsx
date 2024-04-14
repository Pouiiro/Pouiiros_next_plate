import { render, screen, within } from "@testing-library/react"
import { expect, test } from "vitest"

import About from "@/app/about/page"
import { items as listItems } from "@/constants/about"

test("About page", () => {
	render(<About />)
	const header = screen.getByRole("heading", {
		level: 1,
		name: "List of things included:"
	})
	const list = screen.getByRole("list", {
		name: /items/i
	})
	const { getAllByRole } = within(list)
	const items = getAllByRole("listitem")
	const button = screen.getByRole("button", { name: "Go back home" })

	expect(header).toBeDefined()
	expect(items.length).toBe(listItems.length)
	expect(button).toBeDefined()
})
