import { lastValueFrom } from '@komore/reactive';
import { eligibleStyleElementsToStyleElements } from './eligible-style-elements-to-style-elements';

describe('Eligible style elements to style elements', () => {
  const mockStyleResourceLoader = jest.fn();

  beforeEach(() => {
    mockStyleResourceLoader.mockClear();
  });

  it('returns an empty list given an empty list', async () => {
    when: 'creating a function that turns a list of eligible style elements into style elements';
    const func = eligibleStyleElementsToStyleElements(mockStyleResourceLoader);
    and: 'calling it with an empty list of eligible elements';
    const parsedStyleElements$ = func([]);
    const parsedStyleElements = await lastValueFrom(parsedStyleElements$);
    expect: 'the style resource loader not to have been called';
    expect(mockStyleResourceLoader).not.toHaveBeenCalled();
    and: 'an empty list to have been returned';
    expect(parsedStyleElements.length).toBe(0);
  });
});
