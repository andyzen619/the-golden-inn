const { test, expect } = require("@playwright/test");

test("has title", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/The Golden Inn/);
});

test("should be able to search sweet and sour shrimp price", async ({
  page,
}) => {
  await page.goto("/");

  const searchBarDiv = page.getByTestId("searchBar");

  await searchBarDiv.getByRole("textBox").fill("sweet and sour shrimp");

  await page.waitForTimeout(3000);

  expect(await page.getByTestId("searchBar").innerText()).toEqual(
    `$14.95\nSweet and Sour Shrimp`
  );
});
