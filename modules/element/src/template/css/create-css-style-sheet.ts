/**
 * Creates a CSS style sheet using a template
 * @param literals Template string literals
 * @returns CSS style sheet
 */
export function createCssStyleSheet(literals: TemplateStringsArray): CSSStyleSheet {
  const cssStyleSheet = new CSSStyleSheet();
  const text = literals.raw.join();

  cssStyleSheet.replace(text); // TODO: lazy when the first component is connected?

  return cssStyleSheet;
}
