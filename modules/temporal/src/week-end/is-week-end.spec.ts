import { feature } from '@komore/testing';

import { isWeekEnd } from './is-week-end';

feature('Is week-end', () => {
  it.each([
    ['plain date', Temporal.PlainDate, '2020-01-04', true],
    ['plain date', Temporal.PlainDate, '2020-01-03', false],
    ['plain date time', Temporal.PlainDateTime, '2020-01-04T12:34:56.789', true],
    ['plain date time', Temporal.PlainDateTime, '2020-01-03T12:34:56.789', false],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-04T12:34:56.789[Europe/Paris]', true],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-03T12:34:56.789[Europe/Paris]', false],
  ])('tests whether a %s occurs during the week-end', (_, temporalClass, value, expectedResult) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'testing whether the temporal occurs on the week-end';
    const result = isWeekEnd(temporal);

    expect: 'true to have been returned if the temporal occurs on the week-end';
    result === expectedResult;
  });
});
