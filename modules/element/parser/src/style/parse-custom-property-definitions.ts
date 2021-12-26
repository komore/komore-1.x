import { parseStyleSheetCustomPropertyDefinitions } from './parse-style-sheet-custom-property-definitions';

/**
 * Parses style custom properties
 * @param cssStyleSheets List of CSS style sheets
 * @returns List of property definitions
 */
export function parseCustomPropertyDefinitions(
  cssStyleSheets: ReadonlyArray<CSSStyleSheet>
): ReadonlyArray<PropertyDefinition> {
  return cssStyleSheets.flatMap(parseStyleSheetCustomPropertyDefinitions);
}
