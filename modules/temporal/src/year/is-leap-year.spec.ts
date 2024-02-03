import { feature } from '@komore/testing';

import { isLeapYear } from './is-leap-year';

feature('Is leap year', () => {
  it.each([
    ['plain date', Temporal.PlainDate, '2020-01-01', true],
    ['plain date', Temporal.PlainDate, '2021-01-01', false],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789', true],
    ['plain date time', Temporal.PlainDateTime, '2021-01-01T12:34:56.789', false],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T12:34:56.789[Europe/Paris]', true],
    ['zoned date time', Temporal.ZonedDateTime, '2021-01-01T12:34:56.789[Europe/Paris]', false],
    ['plain year month', Temporal.PlainYearMonth, '2020-01', true],
    ['plain year month', Temporal.PlainYearMonth, '2021-01', false],
  ])('can test whether a %s occurs during a leap year', (_, temporalClass, value, expectedResult) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'testing whether the temporal occurs on a leap year';
    const result = isLeapYear(temporal);

    expect: 'the leap year to have been properly detected';
    result === expectedResult;
  });
});
