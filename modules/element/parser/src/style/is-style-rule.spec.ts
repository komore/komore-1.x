import { isStyleRule } from './is-style-rule';

describe('Is style rule', () => {
  it.each([
    [CSSRule.STYLE_RULE, true],
    [CSSRule.KEYFRAME_RULE, false]
  ])('can detect a style rule', (type, expectedResult) => {
    given: 'a CSS rule';
    const cssRule = {
      type
    } as CSSRule;
    when: 'testing whether the rule is a style rule';
    const result = isStyleRule(cssRule);
    expect: 'the CSS rule to have been properly detected';
    expect(result).toBe(expectedResult);
  });
});
