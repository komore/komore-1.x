import { Temporal } from '@js-temporal/polyfill';
import { datesToEarliestDate } from './dates-to-earliest-date';

describe('Dates to earliest date', () => {
  it.each([
    [Temporal.PlainDate, ['2020-01-02', '2020-01-01', '2020-01-03'], '2020-01-01'],
    [
      Temporal.PlainDateTime,
      ['2020-01-02T12:34:56.789', '2020-01-01T14:34:56.789', '2020-01-01T12:34:56.789'],
      '2020-01-01T14:34:56.789',
    ],
    [
      Temporal.ZonedDateTime,
      [
        '2020-01-02T12:34:56.789+01:00[Europe/Paris]',
        '2020-01-01T14:34:56.789+01:00[Europe/Paris]',
        '2020-01-01T12:34:56.789+01:00[Europe/Paris]',
      ],
      '2020-01-01T14:34:56.789+01:00[Europe/Paris]',
    ],
  ])('can reduce a list of temporals to the temporal with the earliest date', (temporalClass, values, expectedDate) => {
    given: 'a list of temporals';
    const temporals = values.map(value => temporalClass.from(value));

    when: 'reducing the list to the earliest date';
    const earliestDate = temporals.reduce(datesToEarliestDate);

    expect: 'the earliest date to have been returned';
    expect(earliestDate.toString()).toBe(expectedDate);
  });
});
