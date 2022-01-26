import { Temporal } from '@js-temporal/polyfill';
import { type Subscription } from '@komore/reactive';
import { mockCurrentInstant } from '@komore/temporal/testing';
import { getCurrentSecondsSinceEpoch } from './get-current-seconds-since-epoch';

describe('Get current seconds since Epoch', () => {
  let subscription: Subscription | undefined;

  beforeAll(() => {
    const currentInstant = Temporal.Instant.from('2020-01-01T12:34:56.789012345Z');
    subscription = mockCurrentInstant(currentInstant).subscribe();
  });

  afterAll(() => subscription?.unsubscribe());

  it('returns the number of seconds since Epoch', () => {
    when: 'getting the number of seconds since Epoch';
    const seconds = getCurrentSecondsSinceEpoch();
    expect: 'the number of seconds since epoch to have been returned';
    expect(seconds).toBe(1577882096);
  });
});
