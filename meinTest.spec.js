test('Überprüfe die Seitentitel', async ({ page }) => {
  await page.goto('https://localhost:3000');
  const title = await page.title();
  expect(title).toBe('Beispiel Domain');
});

test('Überprüfe die Anzeige von Elementen', async ({ page }) => {
  await page.goto('https://localhost:3000');
  const element = await page.$('.example-selector');
  expect(element).not.toBeNull();
});
