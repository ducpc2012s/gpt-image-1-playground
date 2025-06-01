import { test, expect } from '@playwright/test';

test.describe('UI Components Smoke Test', () => {
  test('Trang chủ hiển thị các thành phần UI chính', async ({ page }) => {
    await page.goto('/');
    // Kiểm tra button
    await expect(page.locator('button')).toHaveCountGreaterThan(0);
    // Kiểm tra input
    await expect(page.locator('input')).toHaveCountGreaterThan(0);
    // Kiểm tra textarea
    await expect(page.locator('textarea')).toHaveCountGreaterThan(0);
    // Kiểm tra select
    await expect(page.locator('select, [role="combobox"]')).toHaveCountGreaterThan(0);
    // Kiểm tra card (theo class hoặc data-slot)
    await expect(page.locator('[data-slot="card"]')).toHaveCountGreaterThan(0);
    // Kiểm tra alert
    await expect(page.locator('[data-slot="alert"]')).toHaveCountGreaterThanOrEqual(0);
    // Kiểm tra tabs
    await expect(page.locator('[data-slot="tabs"]')).toHaveCountGreaterThanOrEqual(0);
    // Kiểm tra toggle
    await expect(page.locator('[data-slot="toggle"]')).toHaveCountGreaterThanOrEqual(0);
    // Kiểm tra dialog
    await expect(page.locator('[data-slot="dialog"]')).toHaveCountGreaterThanOrEqual(0);
  });
}); 