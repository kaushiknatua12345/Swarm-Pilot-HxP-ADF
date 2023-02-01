import {AppComponent} from '../src/app/app.component';
import {test,expect} from '@playwright/test';

test.describe('AppComponentTesting',()=>{

  test('App Component Elements Testing',async({page})=>{
  //navigate or open base url
  await page.goto('http://localhost:4200/');

  //find whether the title with text  Hyland Software Solutions India LLP is visible
  await expect(page.getByText(' Hyland Software Solutions India LLP')).toBeVisible();

  //codes to be auto generated - Way 1: use page.pause() to start playwright inspector mode to record test
  //await page.pause();
  await page.getByRole('link', { name: 'New Employees..Register' }).click();

  await page.close();
  });

});
