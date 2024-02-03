import { mockCurrentPlainDateTime, mockCurrentZonedDateTime } from '@komore/temporal/testing';
import { feature } from '@komore/testing';

import { isThisHour } from './is-this-hour';

feature('Is this hour', () => {
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
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:43:56.789', true],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T13:00:00.000', false],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T12:43:56.789+01:00[Europe/Paris]', true],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T10:00:00.000+01:00[Europe/Paris]', false],
  ])('can test whether a %s occurs this hour', (_, temporalClass, value, expectedResult) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'testing whether the temporal occurs this hour';
    const result = isThisHour(temporal);

    expect: 'true to have been returend if the temporal occurs this hour';
    expect(result).toBe(expectedResult);
  });
});
