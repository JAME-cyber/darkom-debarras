import { test, expect } from '@playwright/test';

test.describe('Page d\'accueil', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('la page se charge correctement', async ({ page }) => {
    await expect(page).toHaveTitle(/Darkom|Débarras|Haute-Savoie/i);
  });

  test('le logo est visible', async ({ page }) => {
    const logo = page.locator('header img, nav img').first();
    await expect(logo).toBeVisible();
  });

  test('le titre principal est visible', async ({ page }) => {
    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible();
    await expect(h1).toBeEnabled();
  });

  test('la navigation contient les liens essentiels', async ({ page }) => {
    const nav = page.locator('nav, header');
    await expect(nav.getByRole('link', { name: /services/i })).toBeVisible();
    await expect(nav.getByRole('link', { name: /réalisations/i })).toBeVisible();
    await expect(nav.getByRole('link', { name: /tarifs/i })).toBeVisible();
    await expect(nav.getByRole('link', { name: /contact/i })).toBeVisible();
  });

  test('le bouton CTA est cliquable', async ({ page }) => {
    const cta = page.getByRole('link', { name: /devis/i }).first();
    await expect(cta).toBeVisible();
    await expect(cta).toBeEnabled();
  });
});
