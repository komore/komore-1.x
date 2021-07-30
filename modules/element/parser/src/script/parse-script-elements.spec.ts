import { of } from '@komore/reactive';
import { lastValueFrom } from '@komore/reactive/promise';
import { parseScriptElements } from './parse-script-elements';

describe('Parse script elements', () => {
  const mockScriptResourceLoader = jest.fn((url: string) => {
    const loadedScriptElement = document.createElement('script');
    loadedScriptElement.setAttribute('loaded-url', url);
    return of(loadedScriptElement);
  });

  beforeEach(() => {
    mockScriptResourceLoader.mockClear();
  });

  it('returns an empty list given an empty list', async () => {
    when: 'parsing an empty list of script elements';
    const parsedScriptElements$ = parseScriptElements([], mockScriptResourceLoader);
    const parsedScriptElements = await lastValueFrom(parsedScriptElements$);
    then: 'the script resource loader was not called';
    expect(mockScriptResourceLoader).not.toHaveBeenCalled();
    and: 'an empty list is returned';
    expect(parsedScriptElements.length).toBe(0);
  });

  it('keeps script elements with no external source', async () => {
    given: 'a list of script elements';
    const scriptElement1 = document.createElement('script');
    const scriptElement2 = document.createElement('script');
    when: 'parsing the script elements';
    const parsedScriptElements$ = parseScriptElements([scriptElement1, scriptElement2], mockScriptResourceLoader);
    const parsedScriptElements = await lastValueFrom(parsedScriptElements$);
    then: 'the script resource loader was not called';
    expect(mockScriptResourceLoader).not.toHaveBeenCalled();
    and: 'the script elements are returned';
    expect(parsedScriptElements.length).toBe(2);
    expect(parsedScriptElements[0]).toBe(scriptElement1);
    expect(parsedScriptElements[1]).toBe(scriptElement2);
  });

  it('can load external sources', async () => {
    given: 'a script element with a source';
    const scriptSourceUrl = 'test-source.ts';
    const scriptElement = document.createElement('script');
    scriptElement.setAttribute('src', scriptSourceUrl);
    when: 'parsing the script element';
    const parsedScriptElements$ = parseScriptElements([scriptElement], mockScriptResourceLoader);
    const parsedScriptElements = await lastValueFrom(parsedScriptElements$);
    then: 'the script resource loader is called once';
    expect(mockScriptResourceLoader).toHaveBeenCalledTimes(1);
    expect(mockScriptResourceLoader).toHaveBeenCalledWith(scriptSourceUrl);
    and: 'the parsed script element to be returned';
    expect(parsedScriptElements.length).toBe(1);
    const parsedScriptElement = parsedScriptElements[0];
    expect(parsedScriptElement.tagName).toBe('SCRIPT');
    expect(parsedScriptElement.getAttribute('loaded-url')).toBe(scriptSourceUrl);
  });
});
