import { isEligibleStyleElement } from './is-eligible-style-element';

describe('Is eligible style element', () => {
  it('accepts style elements', () => {
    given: 'a style element'
    const styleElement = document.createElement('style');
    expect: 'the element to pass the test'
    expect(isEligibleStyleElement(styleElement)).toBe(true);
  });

  it('accepts link elements with a stylesheet rel and a source', () => {
    given: 'a link element with a stylesheet rel and a source'
    const linkElement = document.createElement('link');
    linkElement.setAttribute('rel', 'stylesheet');
    linkElement.setAttribute('href', 'test-source');
    expect: 'the element to pass the test'
    expect(isEligibleStyleElement(linkElement)).toBe(true);
  });

  it('rejects other elements', () => {
    given: 'a span element'
    const spanElement = document.createElement('span');
    expect: 'the element to fail the test'
    expect(isEligibleStyleElement(spanElement)).toBe(false);
  });
});
