// pages/InventoryPage.ts
import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  readonly backpackAddToCart =
    '[data-test="add-to-cart-sauce-labs-backpack"]';

  readonly cartBadge = '.shopping_cart_badge';
  readonly cartLink = '.shopping_cart_link';

  async addBackpackToCart() {
    await this.page.click(this.backpackAddToCart);
  }

  async openCart() {
    await this.page.click(this.cartLink);
  }
}