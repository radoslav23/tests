import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  //navigate to Myra home page and verify that logo is displayed
  await page.goto('https://status.myrasecurity.com/')
  await page.getByRole('link', { name: 'Myra Security GmbH' }).isEnabled();


  //verify that case id 44 is displayed
  await page.getByText('Case ID: 44').isEnabled();

  //verify Maintenance Zürich heading is displayed
  await page.getByText('Maintenance - Zürich (ZUR1)').isEnabled();

  //verify maitenance start and end date
  await page.getByText('Start: Thursday, 6 October 2022 - 14:00 UTC').isEnabled();
  await page.getByText('End: Thursday, 6 October 2022 - 15:00 UTC').isEnabled();

  //navigate to Service Affecting section
  await page.getByText('Service Affecting').click()
  await page.getByText('Nothing to report here. Nice!').isEnabled()

  //navigate to Outage section
  await page.getByText('Outage').click()
  await page.getByText('Nothing to report here. Nice!').isEnabled()

  //navigate to maintenance section
  await page.getByText('Maintenance').click()
  await page.getByText('Case ID: 44').isEnabled();

  //navigate to rss
  await page.getByRole('link', { name: 'RSS' }).click()
  await expect(page).toHaveURL('https://status.myrasecurity.com/api/feed')
  
  //return to home page
  await page.goto('https://status.myrasecurity.com/')

  //navigate to email section
  await page.getByText('Email').click()
  await page.getByRole('heading', { name: 'Please enter your email address:' }).isEnabled()
  await page.getByText('I have read and agree to the privacy policy as well as the general terms and con').isEnabled()
  await page.getByPlaceholder('enter your address').isEnabled()
  await page.getByRole('button', { name: 'Cancel' }).isEnabled()
  await page.getByRole('button', { name: 'Submit' }).isEnabled()
  await page.getByRole('button', { name: 'Cancel' }).click()

});
