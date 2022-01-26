import { Temporal } from '@js-temporal/polyfill';
import { type Subscription } from '@komore/reactive';
import { mockCurrentTimeZone } from '@komore/temporal/testing';
import { toMillisecondsSinceEpoch } from './to-milliseconds-since-epoch';

describe('To milliseconds since Epoch', () => {
  let subscription: Subscription | undefined;

  beforeAll(() => {
    const currentTimeZone = Temporal.TimeZone.from('Europe/Paris');
    subscription = mockCurrentTimeZone(currentTimeZone).subscribe();
  });

  afterAll(() => subscription?.unsubscribe());

  it.each([
    ['plain date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789012345'), 1577878496789],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789012345[Europe/Paris]'), 1577878496789]
  ])('can return the number of milliseconds since Epoch from a %s', (_, temporal, expectedMilliseconds) => {
    given: 'a temporal';
    when: 'getting the number of milliseconds since Epoch';
    const milliseconds = toMillisecondsSinceEpoch(temporal);
    expect: 'the number of milliseconds since Epoch to have been returned';
    expect(milliseconds).toBe(expectedMilliseconds);
  });
});
