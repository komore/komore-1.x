import { stylePropertyValueToCustomPropertyDefinitions } from './style-property-value-to-custom-property-definitions';

/**
 * Parses a CSS style rule
 * @param cssStyleRule CSS style rule
 * @returns List of property definitions
 */
export function cssStyleRuleToPropertyDefinitions(cssStyleRule: CSSStyleRule): ReadonlyArray<PropertyDefinition> {
  const cssStyleDeclaration = cssStyleRule.style;
  return Array.from(cssStyleDeclaration)
    .map(propertyNameToPropertyValueOf(cssStyleDeclaration))
    .flatMap(stylePropertyValueToCustomPropertyDefinitions);
}

/**
 * Creates a function that returns a property value from a CSS style declaration, given a property name
 * @param cssStyleDeclaration CSS Style declaration
 * @returns Function that returns a property value from the CSS style declaration, given a property name
 */
function propertyNameToPropertyValueOf(cssStyleDeclaration: CSSStyleDeclaration): (propertyName: string) => string {
  return propertyName => cssStyleDeclaration.getPropertyValue(propertyName);
}
