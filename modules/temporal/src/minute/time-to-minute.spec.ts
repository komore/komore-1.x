import { feature } from '@komore/testing';

import { timeToMinute } from './time-to-minute';

feature('To minute', () => {
  it.each([
    ['plain time', Temporal.PlainTime, '12:34:56.789123456', 34],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789123456', 34],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T12:34:56.789123456[Europe/Paris]', 34],
  ])('can return the minute from a %s', (_, temporalClass, value, expectedMicrosecond) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'getting the minute';
    const result = timeToMinute(temporal);

    expect: 'the correct minute to have been returned';
    expect(result).toBe(expectedMicrosecond);
  });
});
