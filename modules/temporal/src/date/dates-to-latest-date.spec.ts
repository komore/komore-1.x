import { Temporal } from '@js-temporal/polyfill';
import { datesToLatestDate } from './dates-to-latest-date';

describe('Dates to latest date', () => {
  it.each([
    [Temporal.PlainDate, ['2020-01-02', '2020-01-01', '2020-01-03'], '2020-01-03'],
    [
      Temporal.PlainDateTime,
      ['2020-01-02T12:34:56.789', '2020-01-03T10:34:56.789', '2020-01-03T12:34:56.789'],
      '2020-01-03T10:34:56.789',
    ],
    [
      Temporal.ZonedDateTime,
      [
        '2020-01-02T12:34:56.789+01:00[Europe/Paris]',
        '2020-01-03T10:34:56.789+01:00[Europe/Paris]',
        '2020-01-03T12:34:56.789+01:00[Europe/Paris]',
      ],
      '2020-01-03T10:34:56.789+01:00[Europe/Paris]',
    ],
  ])('can reduce a list of temporals to the temporal with the latest date', (temporalClass, values, expectedDate) => {
    given: 'a list of temporals';
    const temporals = values.map(value => temporalClass.from(value));

    when: 'reducing the list to the latest date';
    const latestDate = temporals.reduce(datesToLatestDate);

    expect: 'the latest date to have been returned';
    expect(latestDate.toString()).toBe(expectedDate);
  });
});
