import { parseCustomPropertyReferences } from './parse-custom-property-references';
import type { PropertyDefinition } from './property-definition';

/**
 * Parses a CSS style rule
 * @param cssStyleRule CSS style rule
 * @returns List of property definitions
 */
export function parseStyleRule(cssStyleRule: CSSStyleRule): ReadonlyArray<PropertyDefinition> {
  return Array.from(cssStyleRule.style)
    .map(propertyName => cssStyleRule.style.getPropertyValue(propertyName))
    .flatMap(propertyValue => parseCustomPropertyReferences(propertyValue));
}
