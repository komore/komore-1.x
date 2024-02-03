import { feature } from '@komore/testing';

import { timeToHour } from './time-to-hour';

feature('Time to hour', () => {
  it.each([
    ['plain time', Temporal.PlainTime, '12:34:56.789', 12],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789', 12],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T12:34:56.789[Europe/Paris]', 12],
  ])('can get the hour from a %s', (_, temporalClass, value, expectedHour) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'getting the hour';
    const result = timeToHour(temporal);

    expect: 'the correct hour to have been returned';
    expect(result).toBe(expectedHour);
  });
});
