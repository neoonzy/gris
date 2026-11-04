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
    expect(scrollWidth, "Horizontal overflow at " + width + "px").toBeLessThanOrEqual(clientWidth + 1);
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
  await expect(page.locator("main")).toHaveAttribute("inert", "");
  await expect(page.locator("footer")).toHaveAttribute("inert", "");
  await expect(page.getByRole("link", { name: "O GRIS" })).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Abrir menu" })).toBeFocused();
  await expect(page.getByRole("navigation", { name: "Navegação no celular" })).toBeHidden();
  await expect(page.locator("main")).not.toHaveAttribute("inert", "");
  await expect(page.locator("footer")).not.toHaveAttribute("inert", "");
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

test("records are descriptive links and the decorative ornaments are removed", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".record-item")).toHaveCount(2);
  await expect(page.locator(".record-item").first()).toHaveAttribute("rel", "noopener noreferrer");
  await expect(page.locator(".contour-mark")).toHaveCount(0);
  await expect(page.locator(".hero svg.contour-mark")).toHaveCount(0);
  await expect(page.locator(".footer-columns")).toBeVisible();
});

test("unavailable external photographs have legible fallbacks", async ({ page }) => {
  await page.route("https://www.diariodepernambuco.com.br/**", route => route.abort());
  await page.goto("/");
  await expect(page.locator(".photo-unavailable")).toHaveCount(2);
  await expect(page.getByText("A fotografia deste registro está temporariamente indisponível.").first()).toBeVisible();
});

test("reduced-motion preference disables nonessential transitions", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const transition = await page.locator(".record-item").first().evaluate(element => getComputedStyle(element).transitionDuration);
  expect(transition).toBe("0s");
});

test("footer has clear navigation, contact and social sections", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("navigation", { name: "Navegação do rodapé" })).toBeVisible();
  await expect(page.locator(".footer-column")).toHaveCount(4);
  await expect(page.locator(".footer-bottomline")).toContainText("Vila Arraes");
});

test("donation uses a calm light surface and footer returns to green", async ({ page }) => {
  await page.goto("/");
  const donate = await page.locator(".donate").evaluate(element => {
    const style = getComputedStyle(element);
    return { background: style.backgroundColor, color: style.color };
  });
  expect(donate.background).toBe("rgb(236, 236, 234)");
  expect(donate.color).toBe("rgb(32, 61, 43)");
  const activitiesBackground = await page.locator(".activities").evaluate(element => getComputedStyle(element).backgroundColor);
  expect(activitiesBackground).toBe("rgb(241, 241, 238)");
  const inputBackground = await page.locator(".volunteer-form input").first().evaluate(element => getComputedStyle(element).backgroundColor);
  expect(inputBackground).toBe("rgb(243, 243, 240)");
  const description = await page.locator(".donate-copy").evaluate(element => getComputedStyle(element).backgroundColor);
  expect(description).toBe("rgba(0, 0, 0, 0)");
  const button = await page.locator(".donate-copy .button-green").evaluate(element => getComputedStyle(element).backgroundColor);
  expect(button).toBe("rgb(32, 61, 43)");
  const footer = await page.locator(".footer").evaluate(element => getComputedStyle(element).backgroundColor);
  expect(footer).toBe("rgb(32, 61, 43)");
  const documentary = await page.locator(".documentary").evaluate(element => getComputedStyle(element).backgroundColor);
  expect(documentary).toBe("rgb(23, 27, 24)");
  const network = await page.locator(".network").evaluate(element => getComputedStyle(element).backgroundColor);
  expect(network).toBe("rgb(32, 61, 43)");
});
