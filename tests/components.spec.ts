import { test, expect } from '@playwright/test';

test.describe('Components', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test.describe('Header', () => {
    test('should display logo and navigation', async ({ page }) => {
      await expect(page.getByAltText('logo')).toBeVisible();

      await expect(
        page.getByRole('banner').getByRole('link', { name: /Matheus Vieira/ })
      ).toBeVisible();
    });

    test('should navigate to home when clicking logo', async ({ page }) => {
      await page.getByAltText('logo').click();

      await expect(page).toHaveURL('http://localhost:3000/');
    });

    test('should open GitHub profile in new tab', async ({ page }) => {
      const githubLink = page
        .getByRole('banner')
        .getByRole('link', { name: /Matheus Vieira/ });

      await expect(githubLink).toHaveAttribute('target', '_blank');
      await expect(githubLink).toHaveAttribute(
        'href',
        'https://github.com/ymath-xyz'
      );
    });
  });

  test.describe('Footer', () => {
    test('should display copyright and developer info', async ({ page }) => {
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

      await expect(page.getByText(/© \d{4} Explorer de Filmes/)).toBeVisible();

      await expect(page.getByText('Desenvolvido por')).toBeVisible();
      await expect(
        page.getByRole('contentinfo').getByText('Matheus Vieira')
      ).toBeVisible();
    });

    test('should have working social links', async ({ page }) => {
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

      const githubLink = page
        .getByRole('contentinfo')
        .getByRole('link', { name: /Matheus Vieira/ });
      await expect(githubLink).toHaveAttribute(
        'href',
        'https://github.com/ymath-xyz'
      );

      const linkedinLink = page
        .getByRole('contentinfo')
        .getByRole('link')
        .filter({ hasText: '' })
        .last();
      await expect(linkedinLink).toHaveAttribute(
        'href',
        'https://www.linkedin.com/in/ymath-silva/'
      );
    });
  });

  test.describe('Movie Modal', () => {
    test.beforeEach(async ({ page }) => {
      await page.waitForSelector('[data-testid="movie-card"]', {
        timeout: 10000
      });
      await page.locator('[data-testid="movie-card"]').first().click();
    });

    test('should display movie information', async ({ page }) => {
      await expect(page.getByText('Sinopse')).toBeVisible();
      await expect(page.getByText('Data de Lançamento')).toBeVisible();
      await expect(page.getByText('Idioma Original')).toBeVisible();
      await expect(page.getByText('Avaliação')).toBeVisible();
      await expect(page.getByText('Popularidade')).toBeVisible();
    });

    test('should close with escape key', async ({ page }) => {
      await page.keyboard.press('Escape');

      await expect(page.getByRole('dialog')).not.toBeVisible();
    });

    test('should close when clicking outside', async ({ page }) => {
      await page.mouse.click(10, 10);

      await expect(page.getByRole('dialog')).not.toBeVisible();
    });
  });

  test.describe('Pagination', () => {
    test('should display pagination controls', async ({ page }) => {
      await page.waitForSelector('[data-testid="movie-card"]', {
        timeout: 10000
      });

      await expect(
        page.getByRole('button', { name: 'Anterior' })
      ).toBeVisible();
      await expect(page.getByRole('button', { name: 'Próximo' })).toBeVisible();
      await expect(page.getByText(/1 de/)).toBeVisible();
    });

    test('should disable previous button on first page', async ({ page }) => {
      await page.waitForSelector('[data-testid="movie-card"]', {
        timeout: 10000
      });

      const prevButton = page.getByRole('button', { name: 'Anterior' });
      await expect(prevButton).toBeDisabled();
    });

    test('should enable navigation buttons', async ({ page }) => {
      await page.waitForSelector('[data-testid="movie-card"]', {
        timeout: 10000
      });

      await page.getByRole('button', { name: 'Próximo' }).click();

      await expect(
        page.getByRole('button', { name: 'Anterior' })
      ).toBeEnabled();

      await expect(page.getByText(/2 de/)).toBeVisible();
    });
  });
});
