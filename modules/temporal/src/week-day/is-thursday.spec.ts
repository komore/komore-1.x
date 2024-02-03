import { feature } from '@komore/testing';

import { isThursday } from './is-thursday';

feature('Is Thursday', () => {
  it.each([
    ['plain date', Temporal.PlainDate, '2020-01-09', true],
    ['plain date', Temporal.PlainDate, '2020-01-08', false],
    ['plain date time', Temporal.PlainDateTime, '2020-01-09T12:34:56.789', true],
    ['plain date time', Temporal.PlainDateTime, '2020-01-08T12:34:56.789', false],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-09T12:34:56.789[Europe/Paris]', true],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-08T12:34:56.789[Europe/Paris]', false],
  ])('can test whether a %s occurs on a Thursday', (_, temporalClass, value, expectedResult) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'testing whether the temporal occurs on a Thursday';
    const result = isThursday(temporal);

    expect: 'the correct result to have been returned';
    result === expectedResult;
  });
});
