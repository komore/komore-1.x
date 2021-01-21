import { parseStyleCustomPropertyDefinitions } from './parse-style-custom-property-definitions';

describe('Parse style custom property definitions', () => {
  it('can parse a style sheet', () => {
    given: 'a CSS style sheet with custom properties'
    const cssStyleSheet = new CSSStyleSheet();
    when: 'parsing the custom property definitions'
    const propertyDefinitions = parseStyleCustomPropertyDefinitions(cssStyleSheet);
    then: 'all property definitions are returned'
    expect(propertyDefinitions.length).toBe(0);
  });

  it('returns an empty list when no custom properties are used', () => {
    given: 'a CSS style sheet'
    const cssStyleSheet = new CSSStyleSheet();
    when: 'parsing the custom property definitions'
    const propertyDefinitions = parseStyleCustomPropertyDefinitions(cssStyleSheet);
    then: 'an empty list is returned'
    expect(propertyDefinitions.length).toBe(0);
  });
});
