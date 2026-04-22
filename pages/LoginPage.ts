// pages/LoginPage.ts
import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  readonly usernameInput = '#user-name';
  readonly passwordInput = '#password';
  readonly loginButton = '#login-button';
  readonly errorMessage = '[data-test="error"]';

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async enterUsername(username: string) {
    await this.page.fill(this.usernameInput, username);
  }

  async enterPassword(password: string) {
    await this.page.fill(this.passwordInput, password);
  }

  async clickLogin() {
    await this.page.click(this.loginButton);
  }

  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }
}