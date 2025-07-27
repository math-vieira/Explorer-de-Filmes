import { test, expect } from '@playwright/test';

test.describe('Accessibility', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('should have proper heading structure', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Filmes Populares' })
    ).toBeVisible();

    const h1Elements = page.locator('h1');
    await expect(h1Elements).toHaveCount(1);
  });

  test('should have proper form labels', async ({ page }) => {
    const searchInput = page.getByLabel('Pesquise por um filme');
    await expect(searchInput).toBeVisible();

    await searchInput.focus();
    await expect(searchInput).toBeFocused();
  });

  test('should have proper ARIA labels', async ({ page }) => {
    await page.waitForSelector('[data-testid="movie-card"]', {
      timeout: 10000
    });

    const firstCard = page.locator('[data-testid="movie-card"]').first();
    await expect(firstCard).toHaveAttribute('role', 'button');
    await expect(firstCard).toHaveAttribute('aria-label');
  });

  test('should have proper button states', async ({ page }) => {
    await page.waitForSelector('[data-testid="movie-card"]', {
      timeout: 10000
    });

    const prevButton = page.getByRole('button', { name: 'Anterior' });
    const nextButton = page.getByRole('button', { name: 'Próximo' });

    await expect(prevButton).toBeDisabled();
    await expect(nextButton).toBeEnabled();
  });

  test('should have proper modal accessibility', async ({ page }) => {
    await page.waitForSelector('[data-testid="movie-card"]', {
      timeout: 10000
    });
    await page.locator('[data-testid="movie-card"]').first().click();

    await expect(page.getByRole('dialog')).toBeVisible();

    const closeButton = page.getByRole('button', { name: 'Fechar' });
    await expect(closeButton).toBeVisible();
    await expect(closeButton).toBeEnabled();
  });

  test('should have proper color contrast', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Filmes Populares' })
    ).toBeVisible();
    await expect(page.getByText(/© \d{4} Explorer de Filmes/)).toBeVisible();
  });

  test('should have proper focus management', async ({ page }) => {
    await page.waitForSelector('[data-testid="movie-card"]', {
      timeout: 10000
    });

    await page.getByLabel('Pesquise por um filme').focus();
    await expect(page.getByLabel('Pesquise por um filme')).toBeFocused();

    await page.getByLabel('Pesquise por um filme').fill('test');

    await expect(page.getByLabel('Pesquise por um filme')).toBeFocused();
  });

  test('should have proper alt text for images', async ({ page }) => {
    await expect(page.getByAltText('logo')).toBeVisible();

    await page.waitForSelector('[data-testid="movie-card"]', {
      timeout: 10000
    });

    const movieImages = page.locator('[data-testid="movie-card"] img');
    const count = await movieImages.count();

    for (let i = 0; i < Math.min(count, 3); i++) {
      const img = movieImages.nth(i);
      await expect(img).toHaveAttribute('alt');
    }
  });
});
