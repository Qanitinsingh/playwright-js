import { expect, Locator, Page } from '@playwright/test';

export class AlphaBetaOpsPage {
  readonly page: Page;
  readonly documentationLink: Locator;
  readonly supportLink: Locator;
  readonly communityLink: Locator;
  readonly noviceButton: Locator;
  readonly intermediateButton: Locator;
  readonly expertButton: Locator;
  readonly welcomeHeading: Locator;
  readonly heroText: Locator;
  readonly textBoxesTopic: Locator;
  readonly checkBoxesTopic: Locator;
  readonly radioButtonsTopic: Locator;
  readonly buttonsTopic: Locator;

  static readonly URL = 'https://alphabetaops.com/';

  constructor(page: Page) {
    this.page = page;
    this.documentationLink = page.getByRole('link', { name: 'Documentation' });
    this.supportLink = page.getByRole('link', { name: 'Support' });
    this.communityLink = page.getByRole('link', { name: 'Community' });
    this.noviceButton = page.getByRole('button', { name: 'Novice' });
    this.intermediateButton = page.getByRole('button', { name: 'Intermediate' });
    this.expertButton = page.getByRole('button', { name: 'Expert' });
    this.welcomeHeading = page.getByRole('heading', { name: /Welcome/i });
    this.heroText = page.getByText('Upskill with 1000+ Test Automation challenges | SDET Mastery Platform');
    this.textBoxesTopic = page.getByText('Text Boxes', { exact: true });
    this.checkBoxesTopic = page.getByText('Check-Boxes', { exact: true });
    this.radioButtonsTopic = page.getByText('Radio Buttons', { exact: true });
    this.buttonsTopic = page.getByText('Buttons', { exact: true });
  }

  async goto() {
    await this.page.goto(AlphaBetaOpsPage.URL);
  }

  async expectPageIsLoaded() {
    await expect(this.page).toHaveTitle(/Automation Vault/);
    await expect(this.heroText).toBeVisible();
    await expect(this.welcomeHeading).toBeVisible();
    await expect(this.noviceButton).toBeVisible();
    await expect(this.intermediateButton).toBeVisible();
    await expect(this.expertButton).toBeVisible();
  }

  async expectFooterLinks() {
    await expect(this.documentationLink).toHaveAttribute('href', /#!?/);
    await expect(this.supportLink).toHaveAttribute('href', /#!?/);
    await expect(this.communityLink).toHaveAttribute('href', /#!?/);
  }

  async expandIntermediateSection() {
    await this.intermediateButton.click();
  }

  async expectIntermediateTopicsVisible() {
    await expect(this.textBoxesTopic).toBeVisible();
    await expect(this.checkBoxesTopic).toBeVisible();
    await expect(this.radioButtonsTopic).toBeVisible();
    await expect(this.buttonsTopic).toBeVisible();
  }
}
