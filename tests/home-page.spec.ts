import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('should display the main title', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Filmes Populares' })
    ).toBeVisible();
  });

  test('should display search bar', async ({ page }) => {
    await expect(page.getByLabel('Pesquise por um filme')).toBeVisible();
    await expect(
      page.getByPlaceholder('Escreva o nome de um filme')
    ).toBeVisible();
  });

  test('should load and display movies', async ({ page }) => {
    await page.waitForSelector('[data-testid="movie-card"]', {
      timeout: 10000
    });

    const movieCards = page.locator('[data-testid="movie-card"]');
    await expect(movieCards).toHaveCount(20);
  });

  test('should open movie modal when clicking on a movie card', async ({
    page
  }) => {
    await page.waitForSelector('[data-testid="movie-card"]', {
      timeout: 10000
    });

    await page.locator('[data-testid="movie-card"]').first().click();

    await expect(page.getByRole('dialog')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Fechar' })).toBeVisible();
  });

  test('should close movie modal when clicking close button', async ({
    page
  }) => {
    await page.waitForSelector('[data-testid="movie-card"]', {
      timeout: 10000
    });

    await page.locator('[data-testid="movie-card"]').first().click();

    await page.getByRole('button', { name: 'Fechar' }).click();

    await expect(page.getByRole('dialog')).not.toBeVisible();
  });

  test('should search for movies', async ({ page }) => {
    await page.waitForSelector('[data-testid="movie-card"]', {
      timeout: 10000
    });

    await page.getByLabel('Pesquise por um filme').fill('batman');

    await page.waitForTimeout(2000);

    const movieCards = page.locator('[data-testid="movie-card"]');
    await expect(movieCards.first()).toBeVisible();
  });

  test('should navigate through pages', async ({ page }) => {
    await page.waitForSelector('[data-testid="movie-card"]', {
      timeout: 10000
    });

    await expect(page.getByText('1 de')).toBeVisible();

    await page.getByRole('button', { name: 'Próximo' }).click();

    await expect(page.getByText('2 de')).toBeVisible();
  });

  test('should display loading state', async ({ page }) => {
    await page.goto('http://localhost:3000/?page=999');

    await expect(
      page.locator('[data-testid="loading-skeleton"]').first()
    ).toBeVisible();
  });
});
