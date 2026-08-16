import { test, expect } from '@playwright/test';

test.describe('Simulateur de devis', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('l\'onglet simulateur est accessible', async ({ page }) => {
    const tab = page.getByRole('tab', { name: /simulateur/i }).or(page.getByText(/simulateur/i).first());
    await expect(tab).toBeVisible();
    await tab.click();
  });

  test('l\'étape 1 affiche les services', async ({ page }) => {
    const tab = page.getByRole('tab', { name: /simulateur/i }).or(page.getByText(/simulateur/i).first());
    await tab.click();

    const step = page.getByText(/étape 1/i).or(page.getByText(/step 1/i));
    await expect(step).toBeVisible();

    const cards = page.locator('[class*="card"], [class*="grid"] > div').first();
    await expect(cards).toBeVisible();
  });

  test('on peut naviguer entre les étapes', async ({ page }) => {
    const tab = page.getByRole('tab', { name: /simulateur/i }).or(page.getByText(/simulateur/i).first());
    await tab.click();

    const firstOption = page.locator('[class*="grid"] > div, [class*="card"]').first();
    await firstOption.click();

    const nextBtn = page.getByRole('button', { name: /suivant|next/i });
    if (await nextBtn.isVisible()) {
      await nextBtn.click();
      await expect(page.getByText(/étape 2/i).or(page.getByText(/step 2/i))).toBeVisible();
    }
  });
});
