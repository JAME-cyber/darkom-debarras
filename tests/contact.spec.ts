import { test, expect } from '@playwright/test';

test.describe('Page Contact', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('la page se charge', async ({ page }) => {
    await expect(page).toHaveTitle(/contact|devis/i);
  });

  test('le formulaire classique est présent', async ({ page }) => {
    const tab = page.getByRole('tab', { name: /formulaire/i }).or(page.getByText(/formulaire classique/i));
    await expect(tab).toBeVisible();
    await tab.click();

    await expect(page.getByLabel(/nom/i).or(page.locator('input[name="name"], input[name="nom"]'))).toBeVisible();
    await expect(page.getByLabel(/email/i).or(page.locator('input[type="email"]'))).toBeVisible();
  });

  test('le bouton d\'envoi est présent', async ({ page }) => {
    const submit = page.getByRole('button').first();
    await expect(submit).toBeVisible();
  });

  test('les informations de contact sont visibles', async ({ page }) => {
    await expect(page.locator('body')).toContainText(/téléphone|phone|email|contact/i);
  });
});
