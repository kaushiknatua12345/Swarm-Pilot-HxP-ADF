import { test, expect } from '@playwright/test';

test.describe('RegistrationTest',()=>{

test.beforeEach(async({page})=>{
  await page.goto('http://localhost:4200/Registration');
});

test.afterAll(async({page})=>{
  page.close();
});

test('Validation Testing', async ({ page }) => {
  await page.getByPlaceholder('Enter Employee Name').click();
  await page.getByPlaceholder('Enter Employee Name').press('Tab');
  await page.getByPlaceholder('Enter Employee Code').press('CapsLock');
  await page.getByPlaceholder('Enter Employee Code').press('CapsLock');
  await page.getByPlaceholder('Enter Employee Code').press('Tab');
  await page.getByPlaceholder('Enter Department').press('Tab');

});

test('test success', async ({ page }) => {
  await page.getByPlaceholder('Enter Employee Name').click();
  await page.getByPlaceholder('Enter Employee Name').fill('Kaushik');
  await page.getByPlaceholder('Enter Employee Name').press('Tab');
  await page.getByPlaceholder('Enter Employee Code').fill('123');
  await page.getByPlaceholder('Enter Employee Code').press('Tab');
  await page.getByPlaceholder('Enter Department').fill('RDES');
  await page.getByRole('button', { name: 'Registration' }).click();
});

});
