import { feature } from '@komore/testing';

import { timeToMillisecond } from './time-to-millisecond';

feature('Time to millisecond', () => {
  it.each([
    ['plain time', Temporal.PlainTime, '12:34:56.789123456', 789],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789123456', 789],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T12:34:56.789123456[Europe/Paris]', 789],
  ])('can return the millisecond from a %s', (_, temporalClass, value, expectedMillisecond) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'getting the millisecond';
    const result = timeToMillisecond(temporal);

    expect: 'the correct millisecond to have been returned';
    expect(result).toBe(expectedMillisecond);
  });
});
