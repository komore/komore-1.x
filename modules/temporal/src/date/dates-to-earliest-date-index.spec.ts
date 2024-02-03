import { feature } from '@komore/testing';

import { datesToEarliestDateIndex } from './dates-to-earliest-date-index';

feature('Dates to earliest date index', () => {
  it.each([
    [Temporal.PlainDate, [], -1],
    [Temporal.PlainDate, ['2020-01-02', '2020-01-01', '2020-01-03'], 1],
    [Temporal.PlainDateTime, ['2020-01-02T12:34:56.789', '2020-01-01T14:34:56.789', '2020-01-01T12:34:56.789'], 1],
    [
      Temporal.ZonedDateTime,
      [
        '2020-01-02T12:34:56.789+01:00[Europe/Paris]',
        '2020-01-01T14:34:56.789+01:00[Europe/Paris]',
        '2020-01-01T12:34:56.789+01:00[Europe/Paris]',
      ],
      1,
    ],
  ])(
    'can reduce a list of temporals to the index of the temporal with the earliest date',
    (temporalClass, values, expectedIndex) => {
      given: 'a list of temporals';
      const temporals = values.map(value => temporalClass.from(value));

      when: 'reducing the list to the earliest date index';
      const earliestDateIndex = temporals.reduce(datesToEarliestDateIndex, -1);

      expect: 'the earliest date index to have been returned';
      expect(earliestDateIndex).toBe(expectedIndex);
    }
  );
});
