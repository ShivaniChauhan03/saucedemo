// tests/checkout.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.use({ launchOptions: { slowMo: 1000 } });

test('Verify that user can complete checkout successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addBackpackToCart();
  await inventoryPage.openCart();

  await checkoutPage.startCheckout();
  await checkoutPage.fillDetails('Shivani', 'Chauhan', '110001');
  await checkoutPage.continue();
  await checkoutPage.finish();

  await expect(page.locator(checkoutPage.successMessage)).toHaveText(
    'Thank you for your order!'
  );
});