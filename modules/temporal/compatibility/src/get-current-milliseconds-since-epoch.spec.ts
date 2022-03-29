import { Temporal } from '@js-temporal/polyfill';
import { type Subscription } from '@komore/reactive';
import { mockCurrentInstant } from '@komore/temporal/testing';
import { getCurrentMillisecondsSinceEpoch } from './get-current-milliseconds-since-epoch';

describe('Get current milliseconds since Epoch', () => {
  let subscription: Subscription | undefined;

  beforeAll(() => {
    const currentInstant = Temporal.Instant.from('2020-01-01T12:34:56.789012345Z');
    subscription = mockCurrentInstant(currentInstant).subscribe();
  });

  afterAll(() => subscription?.unsubscribe());

  it('returns the number of milliseconds since Epoch', () => {
    when: 'getting the number of milliseconds since Epoch';
    const seconds = getCurrentMillisecondsSinceEpoch();

    expect: 'the number of milliseconds since epoch to have been returned';
    expect(seconds).toBe(1577882096789);
  });
});
