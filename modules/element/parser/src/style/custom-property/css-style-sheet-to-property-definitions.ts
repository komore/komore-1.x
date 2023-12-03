import { cssStyleRuleToPropertyDefinitions } from './css-style-rule-to-property-definitions';
import { isStyleRule } from './is-style-rule';

/**
 * Parses a CSS style sheet's custom property definitions
 * @param cssStyleSheet CSS style sheet
 * @returns List of custom property definitions
 */
export function cssStyleSheetToPropertyDefinitions(cssStyleSheet: CSSStyleSheet): ReadonlyArray<PropertyDefinition> {
  return [...cssStyleSheet.cssRules].filter(isStyleRule).flatMap(cssStyleRuleToPropertyDefinitions);
}
