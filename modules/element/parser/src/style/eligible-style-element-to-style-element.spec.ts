import { lastValueFrom, of } from '@komore/reactive';
import { eligibleStyleElementToStyleElement } from './eligible-style-element-to-style-element';

describe('Eligible style element to style element', () => {
  const mockStyleResourceLoader = jest.fn((url: string) => {
    const loadedStyleElement = document.createElement('style');
    loadedStyleElement.setAttribute('test-loaded-url', url);
    return of(loadedStyleElement);
  });

  beforeEach(() => {
    mockStyleResourceLoader.mockClear();
  });

  it('keeps a style element untouched', async () => {
    given: 'a style element';
    const eligibleStyleElement = document.createElement('style');
    when: 'creating a function that turns an eligible style element into a style element';
    const func = eligibleStyleElementToStyleElement(mockStyleResourceLoader);
    and: 'calling it';
    const parsedStyleElement$ = func(eligibleStyleElement);
    const styleElement = await lastValueFrom(parsedStyleElement$);
    expect: 'the style resource loader to not have been called';
    expect(mockStyleResourceLoader).not.toHaveBeenCalled();
    and: 'the style element to have been returned';
    expect(styleElement).toBe(eligibleStyleElement);
  });

  it('loads an external source for a link element', async () => {
    given: 'a link element with a source';
    const styleSourceUrl = 'test-source.ts';
    const linkElement = document.createElement('link');
    linkElement.setAttribute('rel', 'stylesheet');
    linkElement.setAttribute('href', styleSourceUrl);
    when: 'creating a function that turns an eligible style element into a style element';
    const func = eligibleStyleElementToStyleElement(mockStyleResourceLoader);
    and: 'calling it';
    const parsedStyleElement$ = func(linkElement);
    const parsedStyleElement = await lastValueFrom(parsedStyleElement$);
    expect: 'the style resource loader to have been called once';
    expect(mockStyleResourceLoader).toHaveBeenCalledTimes(1);
    expect(mockStyleResourceLoader).toHaveBeenCalledWith(styleSourceUrl);
    and: 'a style element to have been returned';
    expect(parsedStyleElement.tagName).toBe('STYLE');
    expect(parsedStyleElement.getAttribute('test-loaded-url')).toBe(styleSourceUrl);
  });

  it('throws when a style sheet link element has no href attribute', () => {
    given: 'a style sheet link element without a href attribute';
    const linkElement = document.createElement('link');
    linkElement.setAttribute('rel', 'stylesheet');
    when: 'creating a function that turns an eligible style element into a style element';
    const func = eligibleStyleElementToStyleElement(mockStyleResourceLoader);
    and: 'calling it';
    const parsedStyleElement$ = func(linkElement);
    expect: 'an error to be thrown when parsing the link element';
    expect(() => lastValueFrom(parsedStyleElement$)).rejects.toThrowError(
      'loading style from a link element requires an href attribute'
    );
  });
});
