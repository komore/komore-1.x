import { mockCurrentPlainDate, mockCurrentPlainDateTime, mockCurrentZonedDateTime } from '@komore/temporal/testing';
import { feature } from '@komore/testing';

import { isNextWeek } from './is-next-week';

feature('Is next week', () => {
  const currentPlainDate = Temporal.PlainDate.from('2020-01-01');
  const currentPlainDateTime = Temporal.PlainDateTime.from('2020-01-01T12:34:56.789');
  const currentZonedDateTime = Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789+01:00[Europe/Paris]');
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
    ['plain date', Temporal.PlainDate, '2020-01-04', false],
    ['plain date', Temporal.PlainDate, '2020-01-11', true],
    ['plain date time', Temporal.PlainDateTime, '2020-01-04T12:34:56.789', false],
    ['plain date time', Temporal.PlainDateTime, '2020-01-11T12:34:56.789', true],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-04T12:34:56.789+01:00[Europe/Paris]', false],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-11T12:34:56.789+01:00[Europe/Paris]', true],
  ])('can test whether a %s occurs during the next week', (_, temporalClass, value, expectedResult) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'testing whether the temporal occurs during the next week';
    const result = isNextWeek(temporal);

    expect: 'true to be returned if the temporal occurs during the next week';
    expect(result).toBe(expectedResult);
  });

  it.each([
    ['2019-12-23', '2019-12-29', false],
    ['2019-12-23', '2019-12-30', true],
    ['2019-12-29', '2019-12-31', true],
    ['2019-12-29', '2020-01-01', true],
    ['2019-12-29', '2020-01-05', true],
    ['2019-12-30', '2020-01-05', false],
    ['2019-12-30', '2020-01-06', true],
  ])('can handle weeks overlapping a year', (current, value, expectedResult) => {
    const currentPlainDate = Temporal.PlainDate.from(current);
    const mocked = mockCurrentPlainDate(currentPlainDate);
    given: 'a temporal';
    const temporal = Temporal.PlainDate.from(value);

    when: 'testing whether the temporal occurs during the next week';
    const result = isNextWeek(temporal);
    mocked.clearMock();

    expect: 'true to be returned if the temporal occurs during the next week';
    expect(result).toBe(expectedResult);
  });
});
