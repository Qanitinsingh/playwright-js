import { test } from '@playwright/test';
import { AlphaBetaOpsPage } from './pages/alphabetaopsPage';

test.describe('AlphaBetaOps homepage', () => {
  test('loads and inspects the homepage using a page object', async ({ page }) => {
    const home = new AlphaBetaOpsPage(page);
    await home.goto();

    await home.expectPageIsLoaded();
    await home.expectFooterLinks();
    await home.expandIntermediateSection();
    await home.expectIntermediateTopicsVisible();
  });
});
