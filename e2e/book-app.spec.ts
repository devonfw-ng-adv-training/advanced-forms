import { test, expect } from '@playwright/test';
import { BookAppPage } from './book-app.po';

test.describe('Book App', () => {
  test('home page shows welcome message', async ({ page }) => {
    const app = new BookAppPage(page);
    await app.gotoHome();
    await expect(app.heading).toHaveText('Welcome to the Book App!');
  });

  test('book overview lists books from the API', async ({ page }) => {
    const app = new BookAppPage(page);
    await app.gotoBooks();
    await expect(app.bookCards.first()).toBeVisible();
    await expect(page.getByText('Effective Java, 2nd Edition')).toBeVisible();
  });

  test('creating a new book validates required fields then saves', async ({ page }) => {
    const app = new BookAppPage(page);
    await app.gotoBooks();
    await app.newBookButton.click();
    await expect(page).toHaveURL(/\/book$/);

    // Submitting an empty form surfaces required-field validation.
    await app.applyButton.click();
    await expect(page.locator('mat-error')).toHaveCount(3);

    await app.isbnInput.fill('9780000000000');
    await app.authorInput.fill('Ada Lovelace');
    await app.titleInput.fill('Notes on the Analytical Engine');
    await app.applyButton.click();

    await expect(page).toHaveURL(/\/books$/);
    await expect(page.getByText('Notes on the Analytical Engine')).toBeVisible();
  });
});
