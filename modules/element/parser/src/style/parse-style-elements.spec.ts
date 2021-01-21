import { lastValueFrom, of } from 'rxjs';
import { parseStyleElements } from './parse-style-elements';

describe('Parse style elements', () => {
  const mockStyleResourceLoader = jest.fn((url: string) => {
    const loadedStyleElement = document.createElement('style');
    loadedStyleElement.setAttribute('loaded-url', url);
    return of(loadedStyleElement);
  });

  beforeEach(() => {
    mockStyleResourceLoader.mockClear();
  });

  it('keeps style elements', async () => {
    given: 'a list of style elements'
    const styleElement1 = document.createElement('style');
    const styleElement2 = document.createElement('style');
    when: 'parsing the style elements'
    const parsedStyleElements$ = parseStyleElements([styleElement1, styleElement2], mockStyleResourceLoader);
    const parsedStyleElements = await lastValueFrom(parsedStyleElements$);
    then: 'the style resource loader was not called'
    expect(mockStyleResourceLoader).not.toHaveBeenCalled();
    and: 'the style elements are returned'
    expect(parsedStyleElements.length).toBe(2);
    expect(parsedStyleElements[0]).toBe(styleElement1);
    expect(parsedStyleElements[1]).toBe(styleElement2);
  });

  it('returns an empty list given an empty list', async () => {
    when: 'parsing an empty list of style elements'
    const parsedStyleElements$ = parseStyleElements([], mockStyleResourceLoader);
    const parsedStyleElements = await lastValueFrom(parsedStyleElements$);
    then: 'the style resource loader was not called'
    expect(mockStyleResourceLoader).not.toHaveBeenCalled();
    and: 'an empty list is returned'
    expect(parsedStyleElements.length).toBe(0);
  });

  it('can load external sources', async () => {
    given: 'a link element with a source'
    const styleSourceUrl = 'test-source.ts';
    const linkElement = document.createElement('link');
    linkElement.setAttribute('rel', 'stylesheet');
    linkElement.setAttribute('href', styleSourceUrl);
    when: 'parsing the link element'
    const parsedStyleElements$ = parseStyleElements([linkElement], mockStyleResourceLoader);
    const parsedStyleElements = await lastValueFrom(parsedStyleElements$);
    then: 'the style resource loader is called once'
    expect(mockStyleResourceLoader).toHaveBeenCalledTimes(1);
    expect(mockStyleResourceLoader).toHaveBeenCalledWith(styleSourceUrl);
    and: 'the parsed style element to be returned'
    expect(parsedStyleElements.length).toBe(1);
    const parsedStyleElement = parsedStyleElements[0];
    expect(parsedStyleElement.tagName).toBe('STYLE');
    expect(parsedStyleElement.getAttribute('loaded-url')).toBe(styleSourceUrl);
  });

  it('can parse a mix of style and link elements', async () => {
    given: 'a link element with a source'
    const styleElement = document.createElement('style');
    const styleSourceUrl = 'test-source.ts';
    const linkElement = document.createElement('link');
    linkElement.setAttribute('rel', 'stylesheet');
    linkElement.setAttribute('href', styleSourceUrl);
    when: 'parsing the link element'
    const parsedStyleElements$ = parseStyleElements([linkElement, styleElement], mockStyleResourceLoader);
    const parsedStyleElements = await lastValueFrom(parsedStyleElements$);
    then: 'the style resource loader is called once'
    expect(mockStyleResourceLoader).toHaveBeenCalledTimes(1);
    expect(mockStyleResourceLoader).toHaveBeenCalledWith(styleSourceUrl);
    and: 'the elements are returned in the correct order'
    expect(parsedStyleElements.length).toBe(2);
    const parsedStyleElement = parsedStyleElements[0];
    expect(parsedStyleElement.tagName).toBe('STYLE');
    expect(parsedStyleElement.getAttribute('loaded-url')).toBe(styleSourceUrl);
    expect(parsedStyleElements[1]).toBe(styleElement);
  });

  it('throws when no href attribute is present', () => {
    given: 'a link element without a source'
    const linkElement = document.createElement('link');
    linkElement.setAttribute('rel', 'stylesheet');
    when: 'parsing the link element'
    const parsedStyleElement$ = parseStyleElements([linkElement], mockStyleResourceLoader);
    expect: 'an error to be thrown when parsing the link element'
    expect(() => lastValueFrom(parsedStyleElement$)).rejects.toThrowError(
      'loading style from a link element requires an href attribute'
    );
  });
});
