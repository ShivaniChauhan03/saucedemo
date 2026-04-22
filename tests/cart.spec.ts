// tests/cart.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
test.use({ launchOptions: { slowMo: 1000 } });
import { InventoryPage } from '../pages/InventoryPage';

test('Verify that user should be able to add product to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addBackpackToCart();

  await expect(page.locator(inventoryPage.cartBadge)).toHaveText('1');
});