import {
  mockCurrentPlainDate,
  mockCurrentPlainDateTime,
  mockCurrentPlainTime,
  mockCurrentZonedDateTime,
} from '@komore/temporal/testing';
import { feature } from '@komore/testing';

import { isPast } from './is-past';

feature('Is past', () => {
  const currentPlainDate = Temporal.PlainDate.from('2020-01-02');
  const currentPlainDateTime = Temporal.PlainDateTime.from('2020-01-02T12:34:56.789');
  const currentZonedDateTime = Temporal.ZonedDateTime.from('2020-01-02T12:34:56.789[Europe/Paris]');
  const currentPlainTime = Temporal.PlainTime.from('12:34:56.789');
  let mockedCurrentPlainDate: ReturnType<typeof mockCurrentPlainDate>;
  let mockedCurrentPlainDateTime: ReturnType<typeof mockCurrentPlainDateTime>;
  let mockedCurrentZonedDateTime: ReturnType<typeof mockCurrentZonedDateTime>;
  let mockedCurrentPlainTime: ReturnType<typeof mockCurrentPlainTime>;

  beforeAll(() => {
    mockedCurrentPlainDate = mockCurrentPlainDate(currentPlainDate);
    mockedCurrentPlainDateTime = mockCurrentPlainDateTime(currentPlainDateTime);
    mockedCurrentZonedDateTime = mockCurrentZonedDateTime(currentZonedDateTime);
    mockedCurrentPlainTime = mockCurrentPlainTime(currentPlainTime);
  });

  afterAll(() => {
    mockedCurrentPlainDate.clearMock();
    mockedCurrentPlainDateTime.clearMock();
    mockedCurrentZonedDateTime.clearMock();
    mockedCurrentPlainTime.clearMock();
  });

  it.each([
    ['plain date', Temporal.PlainDate, '2020-01-02', false],
    ['plain date', Temporal.PlainDate, '2020-01-03', false],
    ['plain date', Temporal.PlainDate, '2019-12-31', true],
    ['plain date time', Temporal.PlainDateTime, '2020-01-02T12:34:56.789', false],
    ['plain date time', Temporal.PlainDateTime, '2020-01-02T12:34:56.790', false],
    ['plain date time', Temporal.PlainDateTime, '2020-01-02T12:34:56.788', true],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-02T12:34:56.789[Europe/Paris]', false],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-02T12:34:56.790[Europe/Paris]', false],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-02T12:34:56.788[Europe/Paris]', true],
    ['plain time', Temporal.PlainTime, '12:34:56.789', false],
    ['plain time', Temporal.PlainTime, '12:34:56.790', false],
    ['plain time', Temporal.PlainTime, '12:34:56.788', true],
    ['plain year-month', Temporal.PlainYearMonth, '2020-01', false],
    ['plain year-month', Temporal.PlainYearMonth, '2020-02', false],
    ['plain year-month', Temporal.PlainYearMonth, '2019-12', true],
    ['plain month-day', Temporal.PlainMonthDay, '01-02', false],
    ['plain month-day', Temporal.PlainMonthDay, '01-03', false],
    ['plain month-day', Temporal.PlainMonthDay, '01-01', true],
  ])('returns true when a %s occurs in the past', (_, temporalClass, value, expectedResult) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'testing whether the temporal occurs in the past';
    const result = isPast(temporal);

    expect: 'true to have been returned if the temporal occurs in the past';
    expect(result).toBe(expectedResult);
  });
});
