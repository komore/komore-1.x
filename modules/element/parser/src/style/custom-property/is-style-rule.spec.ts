import { isStyleRule } from './is-style-rule';

describe('Is style rule', () => {
  it.each([
    [new CSSStyleRule(), true],
    [new CSSRule(), false]
  ])('can detect a style rule', (cssRule, expectedResult) => {
    given: 'a CSS rule';
    when: 'testing whether the rule is a style rule';
    const result = isStyleRule(cssRule);
    expect: 'the CSS rule to have been properly detected';
    expect(result).toBe(expectedResult);
  });
});
