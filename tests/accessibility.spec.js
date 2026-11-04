import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("WCAG AA: no detectable violations", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);

  const result = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();

  expect(
    result.violations.map(({ id, impact, nodes }) => ({
      id,
      impact,
      nodes: nodes.map(node => ({ target: node.target, failureSummary: node.failureSummary })),
    }))
  ).toEqual([]);
});

test("fluid layout: no horizontal page overflow", async ({ page }) => {
  const widths = [320, 375, 768, 1024, 1440];
  for (const width of widths) {
    await page.setViewportSize({ width, height: 850 });
    await page.goto("/");
    const { scrollWidth, clientWidth } = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    expect(scrollWidth, \`Horizontal overflow at \${width}px\`).toBeLessThanOrEqual(clientWidth + 1);
  }
});

test("mobile menu can be opened, navigated and closed with keyboard", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 });
  await page.goto("/");
  const button = page.getByRole("button", { name: "Abrir menu" });
  await button.focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("button", { name: "Fechar menu" })).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("navigation", { name: "Navegação no celular" })).toBeVisible();
  await expect(page.getByRole("link", { name: "O GRIS" })).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Abrir menu" })).toBeFocused();
  await expect(page.getByRole("navigation", { name: "Navegação no celular" })).toBeHidden();
});

test("disclosures work by keyboard and form fields are labeled", async ({ page }) => {
  await page.goto("/");
  const summary = page.locator(".activity-row summary").first();
  await summary.focus();
  await page.keyboard.press("Enter");
  await expect(page.locator(".activity-row").first()).toHaveAttribute("open", "");
  await expect(page.getByLabel("Seu nome")).toBeVisible();
  await expect(page.getByLabel("E-mail", { exact: true })).toBeVisible();
  await expect(page.getByLabel("Telefone")).toBeVisible();
  await expect(page.getByLabel("Como gostaria de contribuir?")).toBeVisible();
});

test("records are descriptive links; ornaments do not appear in accessibility tree", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".record-item")).toHaveCount(2);
  await expect(page.locator(".record-item").first()).toHaveAttribute("rel", "noopener noreferrer");
  await expect(page.locator(".contour-mark")).toHaveCount(3);
  await expect(page.locator(".contour-mark").first()).toHaveAttribute("aria-hidden", "true");
});
