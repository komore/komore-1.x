import { feature } from '@komore/testing';

import { isFriday } from './is-friday';

feature('Is Friday', () => {
  it.each([
    ['plain date', Temporal.PlainDate, '2020-01-10', true],
    ['plain date', Temporal.PlainDate, '2020-01-09', false],
    ['plain date time', Temporal.PlainDateTime, '2020-01-10T12:34:56.789', true],
    ['plain date time', Temporal.PlainDateTime, '2020-01-09T12:34:56.789', false],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-10T12:34:56.789[Europe/Paris]', true],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-09T12:34:56.789[Europe/Paris]', false],
  ])('can test whether a %s occurs on a Friday', (_, temporalClass, value, expectedResult) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'testing whether the temporal occurs on a Friday';
    const result = isFriday(temporal);

    expect: 'the correct result to have been returned';
    expect(result).toBe(expectedResult);
  });
});
