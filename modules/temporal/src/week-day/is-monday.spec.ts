import { feature } from '@komore/testing';

import { isMonday } from './is-monday';

feature('Is Monday', () => {
  it.each([
    ['plain date', Temporal.PlainDate, '2020-01-06', true],
    ['plain date', Temporal.PlainDate, '2020-01-05', false],
    ['plain date time', Temporal.PlainDateTime, '2020-01-06T12:34:56.789', true],
    ['plain date time', Temporal.PlainDateTime, '2020-01-05T12:34:56.789', false],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-06T12:34:56.789[Europe/Paris]', true],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-05T12:34:56.789[Europe/Paris]', false],
  ])('can test whether a %s occurs on a Monday', (_, temporalClass, value, expectedResult) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'testing whether the temporal occurs on a Monday';
    const result = isMonday(temporal);

    expect: 'the correct result to have been returned';
    expect(result).toBe(expectedResult);
  });
});
