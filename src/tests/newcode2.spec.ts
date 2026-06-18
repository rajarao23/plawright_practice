import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8888/');
  await page.locator('input[name="user_password"]').click();
  await page.locator('input[name="user_password"]').fill('admin');
  await page.getByRole('button', { name: 'Login' }).click();
});