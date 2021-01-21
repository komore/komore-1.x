import { parseStyleCustomPropertyReferences } from './parse-style-custom-property-references';

/**
 * Parses style custom properties
 * @param cssStyleSheet CSS style sheet
 * @returns Parsed
 */
export function parseStyleCustomPropertyDefinitions(cssStyleSheet: CSSStyleSheet): ReadonlyArray<PropertyDefinition> {
  return Array.from(cssStyleSheet.cssRules).filter(isStyleRule).flatMap(parseStyleRules);
}

/**
 * Tests whether a CSS rule is a style rule
 * @param cssRule CSS rule
 * @returns true if the CSS rule is a style rule
 */
function isStyleRule(cssRule: CSSRule): cssRule is CSSStyleRule {
  return cssRule.type === CSSRule.STYLE_RULE;
}

function parseStyleRules(cssStyleRule: CSSStyleRule): ReadonlyArray<PropertyDefinition> {
  return Array.from(cssStyleRule.style)
    .map(propertyName => cssStyleRule.style.getPropertyValue(propertyName))
    .flatMap(propertyValue => parseStyleCustomPropertyReferences(propertyValue));
}
