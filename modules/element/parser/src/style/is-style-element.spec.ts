import { isStyleElement } from './is-style-element';

describe('Is style element', () => {
  it('accepts style elements', () => {
    given: 'a style element';
    const styleElement = document.createElement('style');
    expect: 'the element to pass the test';
    expect(isStyleElement(styleElement)).toBe(true);
  });

  it('rejects non-style elements', () => {
    given: 'a style element';
    const linkElement = document.createElement('link');
    expect: 'the element to fail the test';
    expect(isStyleElement(linkElement)).toBe(false);
  });
});
