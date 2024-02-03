import { feature } from '@komore/testing';

import { isWeekDay } from './is-week-day';
import { wednesday } from './wednesday';

feature('Is week day', () => {
  it.each([
    ['plain date', Temporal.PlainDate, '2020-01-01', wednesday, true],
    ['plain date', Temporal.PlainDate, '2020-01-02', wednesday, false],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789', wednesday, true],
    ['plain date time', Temporal.PlainDateTime, '2020-01-02T12:34:56.789', wednesday, false],
    ['zoned date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789[Europe/Paris]', wednesday, true],
    ['zoned date time', Temporal.PlainDateTime, '2020-01-02T12:34:56.789[Europe/Paris]', wednesday, false],
  ])('can test whether a %s occurs on a specific week day', (_, temporalClass, value, weekDay, expectedResult) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'creating a function that tests whether a temporal occurs on a specific week day';
    const func = isWeekDay(weekDay);
    and: 'calling the function';
    const result = func(temporal);

    expect: 'the week day to have been correctly tested';
    expect(result).toBe(expectedResult);
  });
});
