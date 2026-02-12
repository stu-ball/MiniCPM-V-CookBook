// playwright test for screen share button visibility and functionality
// Run with: npx playwright test tests/screen-share.spec.js

const { test, expect } = require('@playwright/test');

test.describe('Screen Share Button', () => {
  test('Button is always visible and toggles screen share', async ({ page }) => {
    await page.goto('http://localhost:3000');
    // Wait for main video UI
    await page.waitForSelector('.video-page-btn .screen-share-btn');
    // Button should be visible
    const btn = await page.locator('.video-page-btn .screen-share-btn button');
    await expect(btn).toBeVisible();
    // Click to start screen share
    await btn.click();
    // Should indicate screen share is ON
    const debugText = await page.locator('.video-page-btn .screen-share-btn span');
    await expect(debugText).toContainText('ON');
    // Click again to stop
    await btn.click();
    await expect(debugText).toContainText('OFF');
  });
});
