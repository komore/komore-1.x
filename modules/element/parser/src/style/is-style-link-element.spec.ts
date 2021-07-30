import { isStyleLinkElement } from './is-style-link-element';

describe('Is style link element', () => {
  it('accepts link elements with a stylesheet rel and a source', () => {
    given: 'a link element with a stylesheet rel and a source';
    const linkElement = document.createElement('link');
    linkElement.setAttribute('rel', 'stylesheet');
    linkElement.setAttribute('href', 'test-source');
    expect: 'the element to pass the test';
    expect(isStyleLinkElement(linkElement)).toBe(true);
  });

  it('rejects link elements without a stylesheet rel', () => {
    given: 'a link element with a source but no stylesheet rel';
    const linkElement = document.createElement('link');
    linkElement.setAttribute('href', 'test-source');
    expect: 'the element to fail the test';
    expect(isStyleLinkElement(linkElement)).toBe(false);
  });

  it('rejects link elements without a source', () => {
    given: 'a link element with a stylesheet rel but no source';
    const linkElement = document.createElement('link');
    linkElement.setAttribute('rel', 'stylesheet');
    expect: 'the element to fail the test';
    expect(isStyleLinkElement(linkElement)).toBe(false);
  });

  it('rejects non-link elements', () => {
    given: 'a style element with a stylesheet rel and a source';
    const styleElement = document.createElement('style');
    styleElement.setAttribute('rel', 'stylesheet');
    styleElement.setAttribute('src', 'test-source');
    expect: 'the element to fail the test';
    expect(isStyleLinkElement(styleElement)).toBe(false);
  });
});
