import { of } from '@komore/reactive';
import { fromPromise, lastValueFrom } from '@komore/reactive/promise';
import { mock } from 'jest-mock-extended';
import { copyToClipboard } from './copy-to-clipboard.directive';

describe('Copy to clipboard', () => {
  it('works', async () => {
    given: 'an element and text to copy';
    const textToCopy = 'test';
    const mockElement = mock<Element>();
    const mockEvent = mock<Event>();
    const element = fromPromise(Promise.resolve(mockElement));
    const callbacks: Record<string, EventListener> = {};
    mockElement.addEventListener.mockImplementationOnce((type, callback) => {
      console.log('ahoy', type, callback);
      callbacks[type] = callback as EventListener;
    });
    and: 'an observing copy to clipboard directive';
    const directive = copyToClipboard();
    const promise = lastValueFrom(directive({ element, parameters: of(textToCopy) }));

    when: 'dispatching a click event';
    console.log('hm');
    callbacks['click'](mockEvent);
    console.log('hooo');
    expect: 'weeee TODO';
    const result = await promise;
    expect(result).toBe('wee');
  });
});
