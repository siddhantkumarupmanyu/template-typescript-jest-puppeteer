/* beforeAll(async () => {
  await page.goto("file:///home/siddhant/JSProjects/learningJest/with-puppeteer-typescript/test.html", { waitUntil: 'domcontentloaded' });
});

describe('Test header and title of the page', () => {
  test('Title of the page', async () => {
    const title: string = await page.title();
    expect(title).toBe('Test Document');
  });
});

describe('Test Document', () => {
  beforeAll(async () => {
    await page.goto('file:///home/siddhant/JSProjects/learningJest/with-puppeteer-typescript/test.html');
  });

  it('should be titled "Google"', async () => {
    await expect(page.title()).resolves.toMatch('Test Document');
  });
}); */