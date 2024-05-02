import { items } from '@/constants/about'
import { expect, test } from '@playwright/test'

test('Test E2E', async ({ page }) => {
	await page.goto('/')
	await expect(page).toHaveTitle("Pouiiro's next plate")
	await expect(page.locator('h1')).toHaveText(
		'Hello world and welcome to Pouiiro’s next 🍽'
	)

	await page.getByRole('link', { name: 'What is included?' }).click()
	await expect(page).toHaveURL('/about')
	await expect(page.locator('h1')).toHaveText('List of things included:')

	const allItems = await page.getByRole('listitem').all()

	allItems.forEach(async (item, index) => {
		await expect(item).toHaveText(items[index])
	})

	await page.getByRole('link', { name: 'Go back home' }).click()
	await expect(page).toHaveURL('/')
	await page.goto('/UnknownPage404')
	await expect(page.locator('h1')).toHaveText('404 - Not found')
	await expect(page.locator('p')).toHaveText(
		'The requested content is not available'
	)
	await page.getByRole('link', { name: 'Go back home' }).click()
	await expect(page).toHaveURL('/')
})
