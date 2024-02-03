import { mockCurrentPlainDateTime, mockCurrentZonedDateTime } from '@komore/temporal/testing';
import { feature } from '@komore/testing';

import { isLastHour } from './is-last-hour';

feature('Is last hour', () => {
  const currentPlainDateTime = Temporal.PlainDateTime.from('2020-01-01T12:34:56.789');
  const currentZonedDateTime = Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789+01:00[Europe/Paris]');
  let mockedCurrentPlainDateTime: ReturnType<typeof mockCurrentPlainDateTime>;
  let mockedCurrentZonedDateTime: ReturnType<typeof mockCurrentZonedDateTime>;

  beforeAll(() => {
    mockedCurrentPlainDateTime = mockCurrentPlainDateTime(currentPlainDateTime);
    mockedCurrentZonedDateTime = mockCurrentZonedDateTime(currentZonedDateTime);
  });

  afterAll(() => {
    mockedCurrentPlainDateTime.clearMock();
    mockedCurrentZonedDateTime.clearMock();
  });

  it.each([
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:00:00.000', false],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T11:59:56.789', true],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T11:00:00.000', true],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T12:00:00.000+01:00[Europe/Paris]', false],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T11:59:56.789+01:00[Europe/Paris]', true],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T11:00:00.000+01:00[Europe/Paris]', true],
  ])('can test whether a %s occurs during the last hour', (_, temporalClass, value, expectedResult) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'testing whether the temporal occurs during the last hour';
    const result = isLastHour(temporal);

    expect: 'true to be returned if the temporal occurs during the last hour';
    expect(result).toBe(expectedResult);
  });

  it.each([
    ['2020-01-02T00:45:12.789', '2020-01-02T00:00:00.000', false],
    ['2020-01-02T00:45:12.789', '2020-01-01T23:12:34.567', true],
  ])('can handle hours overlapping a day', (current, value, expectedResult) => {
    setup: 'a current plain date time';
    const currentPlainDate = Temporal.PlainDateTime.from(current);
    const mocked = mockCurrentPlainDateTime(currentPlainDate);

    given: 'a temporal';
    const temporal = Temporal.PlainDateTime.from(value);

    when: 'testing whether the temporal occurs during the last hour';
    const result = isLastHour(temporal);

    expect: 'true to be returned if the temporal occurs during the last hour';
    expect(result).toBe(expectedResult);

    cleanup: mocked.clearMock();
  });
});
