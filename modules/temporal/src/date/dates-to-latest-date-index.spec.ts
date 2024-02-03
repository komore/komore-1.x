import { datesToLatestDateIndex } from './dates-to-latest-date-index';

describe('Dates to latest date index', () => {
  it.each([
    [Temporal.PlainDate, [], -1],
    [Temporal.PlainDate, ['2020-01-02', '2020-01-01', '2020-01-03'], 2],
    [Temporal.PlainDateTime, ['2020-01-02T12:34:56.789', '2020-01-03T10:34:56.789', '2020-01-03T12:34:56.789'], 1],
    [
      Temporal.ZonedDateTime,
      [
        '2020-01-02T12:34:56.789+01:00[Europe/Paris]',
        '2020-01-03T10:34:56.789+01:00[Europe/Paris]',
        '2020-01-03T12:34:56.789+01:00[Europe/Paris]',
      ],
      1,
    ],
  ])(
    'can reduce a list of temporals to the index of the temporal with the latest date',
    (temporalClass, values, expectedIndex) => {
      given: 'a list of temporals';
      const temporals = values.map(value => temporalClass.from(value));

      when: 'reducing the list to the latest date index';
      const latestDateIndex = temporals.reduce(datesToLatestDateIndex, -1);

      expect: 'the latest date index to have been returned';
      expect(latestDateIndex).toBe(expectedIndex);
    }
  );
});
