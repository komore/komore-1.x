import { feature } from '@komore/testing';

import { isMessageEventOriginIn } from './is-message-event-origin-in';

feature('Is message event origin in', () => {
  it.each([
    [[], false],
    [['test-origin'], true],
    [['bad-origin'], false],
    [['bad-origin', 'test-origin'], true],
  ])('can test whether a message event comes from a set of possible origins', (origins, expectedResult) => {
    given: 'a message event';
    const origin = 'test-origin';
    const messageEvent = { origin } as MessageEvent<unknown>;
    when: 'testing whether the message event comes from a set of possible origins';
    const result = isMessageEventOriginIn(...origins)(messageEvent);
    expect: 'the correct result to have been returned';
    expect(result).toBe(expectedResult);
  });
});
