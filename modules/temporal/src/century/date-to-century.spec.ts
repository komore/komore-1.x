import { feature } from '@komore/testing';

import { dateToCentury } from './date-to-century';

feature('Date to century', () => {
  it.each([
    ['plain date', Temporal.PlainDate, '2020-01-01', 21],
    ['plain date', Temporal.PlainDate, '2000-12-31', 20],
    ['plain date', Temporal.PlainDate, '1999-01-01', 20],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789', 21],
    ['plain date time', Temporal.PlainDateTime, '2000-12-31T12:34:56.789', 20],
    ['plain date time', Temporal.PlainDateTime, '1999-01-01T12:34:56.789', 20],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T12:34:56.789+01:00[Europe/Paris]', 21],
    ['zoned date time', Temporal.ZonedDateTime, '2000-12-31T12:34:56.789+01:00[Europe/Paris]', 20],
    ['zoned date time', Temporal.ZonedDateTime, '1999-01-01T12:34:56.789+01:00[Europe/Paris]', 20],
    ['plain year month', Temporal.PlainYearMonth, '2020-01', 21],
    ['plain year month', Temporal.PlainYearMonth, '2000-12', 20],
    ['plain year month', Temporal.PlainYearMonth, '1999-01', 20],
  ])('can return the century from a %s', (_, temporalClass, value, expectedCentury) => {
    given: 'a temporal with a date';
    const temporal = temporalClass.from(value);

    when: 'getting the century from the date';
    const century = dateToCentury(temporal);

    expect: 'the correct century to have been returned';
    expect(century).toBe(expectedCentury);
  });
});
