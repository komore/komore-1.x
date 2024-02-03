import { mockCurrentPlainDate, withMockedTemporals } from '@komore/temporal/testing';
import { feature } from '@komore/testing';

import { isLastWeek } from './is-last-week';

feature(
  'Is last week',
  withMockedTemporals(
    {
      currentPlainDate: Temporal.PlainDate.from('2020-01-01'),
      currentPlainDateTime: Temporal.PlainDateTime.from('2020-01-01T12:34:56.789'),
      currentZonedDateTime: Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789+01:00[Europe/Paris]'),
    },
    () => {
      it.each([
        ['plain date', Temporal.PlainDate, '2019-12-30', false],
        ['plain date', Temporal.PlainDate, '2019-12-29', true],
        ['plain date time', Temporal.PlainDateTime, '2019-12-30T12:34:56.789', false],
        ['plain date time', Temporal.PlainDateTime, '2019-12-29T12:34:56.789', true],
        ['zoned date time', Temporal.ZonedDateTime, '2019-12-30T12:34:56.789+01:00[Europe/Paris]', false],
        ['zoned date time', Temporal.ZonedDateTime, '2019-12-29T12:34:56.789+01:00[Europe/Paris]', true],
      ])('can test whether a %s occurs during the last week', (_, temporalClass, value, expectedResult) => {
        given: 'a temporal';
        const temporal = temporalClass.from(value);

        when: 'testing whether the temporal occurs during the last week';
        const result = isLastWeek(temporal);

        expect: 'true to be returned if the temporal occurs during the last week';
        expect(result).toBe(expectedResult);
      });

      it.each([
        ['2019-12-29', '2019-12-23', false],
        ['2019-12-30', '2019-12-23', true],
        ['2019-12-31', '2019-12-29', true],
        ['2020-01-01', '2019-12-29', true],
        ['2020-01-05', '2019-12-29', true],
        ['2020-01-05', '2019-12-30', false],
        ['2020-01-06', '2019-12-30', true],
      ])('can handle weeks overlapping a year', (current, value, expectedResult) => {
        const currentPlainDate = Temporal.PlainDate.from(current);
        const mocked = mockCurrentPlainDate(currentPlainDate);
        given: 'a temporal';
        const temporal = Temporal.PlainDate.from(value);

        when: 'testing whether the temporal occurs during the last week';
        const result = isLastWeek(temporal);
        mocked.clearMock();

        expect: 'true to be returned if the temporal occurs during the last week';
        expect(result).toBe(expectedResult);
      });
    }
  )
);
