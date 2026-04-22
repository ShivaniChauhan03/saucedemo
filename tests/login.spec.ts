// tests/login.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Scenarios', () => {
  test('Verify that user can login successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory.html/);
  });

  test('Verify that user should see error message for invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'wrong_password');

    await expect(page.locator(loginPage.errorMessage)).toContainText(
      'Username and password do not match'
    );
  });

  test('Verify that user should get error for locked out user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');

    await expect(page.locator(loginPage.errorMessage)).toContainText(
      'Sorry, this user has been locked out.'
    );
  });
});