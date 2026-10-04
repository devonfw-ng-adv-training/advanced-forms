import { Page, Locator } from '@playwright/test';

export class BookAppPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly bookCards: Locator;
  readonly newBookButton: Locator;
  readonly isbnInput: Locator;
  readonly authorInput: Locator;
  readonly titleInput: Locator;
  readonly applyButton: Locator;
  readonly cancelButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('app-root h1');
    this.bookCards = page.locator('mat-card.book-card');
    this.newBookButton = page.locator('button.floating-button');
    this.isbnInput = page.getByPlaceholder('ISBN');
    this.authorInput = page.getByPlaceholder('Author');
    this.titleInput = page.getByPlaceholder('Title');
    this.applyButton = page.getByRole('button', { name: 'Apply' });
    this.cancelButton = page.getByRole('button', { name: 'Cancel' });
  }

  async gotoHome() {
    await this.page.goto('/home');
  }

  async gotoBooks() {
    await this.page.goto('/books');
  }
}
