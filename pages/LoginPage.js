import { BasePage } from './BasePage';
import { env } from '../config/env';

export class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.username = '#username';
    this.password = '#password';
    this.loginButton = '#login';
  }

  async goto() {
    await this.navigate(env.baseURL);
  }

  async login(user, pass) {
    await this.fill(this.username, user);
    await this.fill(this.password, pass);
    await this.click(this.loginButton);
  }
}