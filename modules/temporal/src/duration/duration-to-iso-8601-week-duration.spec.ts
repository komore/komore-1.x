import { feature } from '@komore/testing';

import { durationToISO8601WeekDuration } from './duration-to-iso-8601-week-duration';

feature('Duration to ISO 8601 week duration', () => {
  it.each([
    [Temporal.Duration.from({ weeks: 2 }), 'P2W'],
    [Temporal.Duration.from({ weeks: -5 }), 'P-5W'],
    [Temporal.Duration.from({ weeks: 2, days: 9 }), 'P3W'],
  ])('can convert a duration to an ISO 8601 week duration', (duration, expectedString) => {
    given: 'a duration';

    when: 'building an ISO 8601 week duration string';
    const iso8601String = durationToISO8601WeekDuration(duration);

    expect: 'the string to have a correct format matching the duration';
    expect(iso8601String).toBe(expectedString);
  });
});
