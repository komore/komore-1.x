import { mockCurrentPlainDate, mockCurrentPlainDateTime, mockCurrentZonedDateTime } from '@komore/temporal/testing';
import { feature } from '@komore/testing';

import { isThisMonth } from './is-this-month';

feature('Is this month', () => {
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
    ['plain date', Temporal.PlainDate, '2020-06-01', false],
    ['plain date', Temporal.PlainDate, '2020-01-01', true],
    ['plain date time', Temporal.PlainDateTime, '2020-06-01T12:34:56.789', false],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789', true],
    ['zoned date time', Temporal.ZonedDateTime, '2020-06-01T12:34:56.789[Europe/Paris]', false],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T12:34:56.789[Europe/Paris]', true],
    ['plain year month', Temporal.PlainYearMonth, '2020-06', false],
    ['plain year month', Temporal.PlainYearMonth, '2020-01', true],
    ['plain month day', Temporal.PlainMonthDay, '06-01', false],
    ['plain month day', Temporal.PlainMonthDay, '01-01', true],
  ])('can test whether a %s occurs this month', (_, temporalClass, value, expectedResult) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'testing whether the temporal occurs this month';
    const result = isThisMonth(temporal);

    expect: 'true to have been returend if the temporal occurs this month';
    expect(result).toBe(expectedResult);
  });
});
