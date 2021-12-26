import { isStyleRule } from './is-style-rule';
import { parseStyleRule } from './parse-style-rule';
import { type PropertyDefinition } from './property-definition';

/**
 * Parses a CSS style sheet's custom property definitions
 * @param cssStyleSheet CSS style sheet
 * @returns List of custom property definitions
 */
export function parseStyleSheetCustomPropertyDefinitions(
  cssStyleSheet: CSSStyleSheet
): ReadonlyArray<PropertyDefinition> {
  return Array.from(cssStyleSheet.cssRules).filter(isStyleRule).flatMap(parseStyleRule);
}
