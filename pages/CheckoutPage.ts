// pages/CheckoutPage.ts
import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  readonly checkoutButton = '[data-test="checkout"]';
  readonly firstName = '[data-test="firstName"]';
  readonly lastName = '[data-test="lastName"]';
  readonly postalCode = '[data-test="postalCode"]';
  readonly continueButton = '[data-test="continue"]';
  readonly finishButton = '[data-test="finish"]';
  readonly successMessage = '.complete-header';

  async startCheckout() {
    await this.page.click(this.checkoutButton);
  }

  async fillDetails(first: string, last: string, zip: string) {
    await this.page.fill(this.firstName, first);
    await this.page.fill(this.lastName, last);
    await this.page.fill(this.postalCode, zip);
  }

  async continue() {
    await this.page.click(this.continueButton);
  }

  async finish() {
    await this.page.click(this.finishButton);
  }
}