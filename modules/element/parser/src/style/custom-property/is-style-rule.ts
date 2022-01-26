/**
 * Tests whether a CSS rule is a style rule
 * @param cssRule CSS rule
 * @returns true if the CSS rule is a style rule
 */
export function isStyleRule(cssRule: CSSRule): cssRule is CSSStyleRule {
  return cssRule instanceof CSSStyleRule;
}
