import { mockCurrentPlainDate, mockCurrentPlainDateTime, mockCurrentZonedDateTime } from '@komore/temporal/testing';
import { feature } from '@komore/testing';

import { isThisWeekEnd } from './is-this-week-end';

feature('Is this week-end', () => {
  const currentPlainDate = Temporal.PlainDate.from('2020-01-01');
  const currentPlainDateTime = Temporal.PlainDateTime.from('2020-01-01T12:34:56.789');
  const currentZonedDateTime = Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789[Europe/Paris]');
  let mockedCurrentPlainDate: ReturnType<typeof mockCurrentPlainDate>;
  let mockedCurrentPlainDateTime: ReturnType<typeof mockCurrentPlainDateTime>;
  let mockedCurrentZonedDateTime: ReturnType<typeof mockCurrentZonedDateTime>;

  beforeAll(() => {
    mockedCurrentPlainDate = mockCurrentPlainDate(currentPlainDate);
    mockedCurrentPlainDateTime = mockCurrentPlainDateTime(currentPlainDateTime);
    mockedCurrentZonedDateTime = mockCurrentZonedDateTime(currentZonedDateTime);
  });

  afterAll(() => {
    mockedCurrentPlainDate.clearMock();
    mockedCurrentPlainDateTime.clearMock();
    mockedCurrentZonedDateTime.clearMock();
  });

  it.each([
    ['plain date', Temporal.PlainDate, '2020-01-01', false],
    ['plain date', Temporal.PlainDate, '2020-01-04', true],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789', false],
    ['plain date time', Temporal.PlainDateTime, '2020-01-04T01:23:45.678', true],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T12:34:56.789[Europe/Paris]', false],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-04T01:23:45.678[Europe/Paris]', true],
  ])(
    'can test whether a %s occurs on the same week-end as the current temporal',
    (_, temporalClass, value, expectedResult) => {
      given: 'a temporal';
      const temporal = temporalClass.from(value);

      when: 'testing whether a temporal occurs on the same week-end as the current temporal';
      const result = isThisWeekEnd(temporal);

      expect: 'true to have been returned if the temporal occurs on the same week-end as the current temporal';
      expect(result).toBe(expectedResult);
    }
  );
});
