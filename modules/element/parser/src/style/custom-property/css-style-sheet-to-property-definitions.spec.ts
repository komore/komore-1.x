import { cssStyleSheetToPropertyDefinitions } from './css-style-sheet-to-property-definitions';

describe('CSS style sheet to property definitions', () => {
  it('can parse a style sheet', () => {
    given: 'a CSS style sheet with custom properties';
    const propertyName1 = '--test';
    const propertyName2 = '--test2';
    const propertyName2Default = '#abc';
    const cssStyleSheet = createStyleSheet([
      `:root { background-color: var(${propertyName1}); }`,
      `:root > span { color: var(${propertyName2}, ${propertyName2Default}); }`
    ]);
    when: 'parsing the custom property definitions';
    const propertyDefinitions = cssStyleSheetToPropertyDefinitions(cssStyleSheet);
    then: 'all property definitions are returned';
    expect(propertyDefinitions.length).toBe(2);
    const propertyDefinition1 = propertyDefinitions[0];
    expect(propertyDefinition1.name).toBe(propertyName1);
    expect(propertyDefinition1.initialValue).toBeUndefined();
    const propertyDefinition2 = propertyDefinitions[1];
    expect(propertyDefinition2.name).toBe(propertyName2);
    expect(propertyDefinition2.initialValue).toBe(propertyName2Default);
  });

  it('returns an empty list when no custom properties are used', () => {
    given: 'a CSS style sheet';
    const cssStyleSheet = new CSSStyleSheet();
    when: 'parsing the custom property definitions';
    const propertyDefinitions = cssStyleSheetToPropertyDefinitions(cssStyleSheet);
    then: 'an empty list is returned';
    expect(propertyDefinitions.length).toBe(0);
  });
});

function createStyleSheet(rules: ReadonlyArray<string>): CSSStyleSheet {
  const cssStyleSheet = new CSSStyleSheet();
  rules.forEach((rule, index) => cssStyleSheet.insertRule(rule, index));
  return cssStyleSheet;
}
