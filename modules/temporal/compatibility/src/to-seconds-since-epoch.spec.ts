import { Temporal } from '@js-temporal/polyfill';
import { type Subscription } from '@komore/reactive';
import { mockCurrentTimeZone } from '@komore/temporal/testing';
import { toSecondsSinceEpoch } from './to-seconds-since-epoch';

describe('To seconds since Epoch', () => {
  let subscription: Subscription | undefined;

  beforeAll(() => {
    const currentTimeZone = Temporal.TimeZone.from('Europe/Paris');
    subscription = mockCurrentTimeZone(currentTimeZone).subscribe();
  });

  afterAll(() => subscription?.unsubscribe());

  it.each([
    ['plain date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789012345'), 1577878496],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789012345[Europe/Paris]'), 1577878496]
  ])('can return the number of seconds since Epoch from a %s', (_, temporal, expectedSeconds) => {
    given: 'a temporal';
    when: 'getting the number of seconds since Epoch';
    const seconds = toSecondsSinceEpoch(temporal);
    expect: 'the number of seconds since Epoch to have been returned';
    expect(seconds).toBe(expectedSeconds);
  });
});
