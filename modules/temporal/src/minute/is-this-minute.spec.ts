import { Temporal } from '@js-temporal/polyfill';
import { mockCurrentPlainDateTime, mockCurrentZonedDateTime } from '@komore/temporal/testing';
import { isThisMinute } from './is-this-minute';

describe('Is this minute', () => {
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
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:12.456', true],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:35:00.000', false],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T12:34:12.456+01:00[Europe/Paris]', true],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T12:35:00.000+01:00[Europe/Paris]', false],
  ])('can test whether a %s occurs this minute', (_, temporalClass, value, expectedResult) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'testing whether the temporal occurs this minute';
    const result = isThisMinute(temporal);

    expect: 'true to have been returend if the temporal occurs this minute';
    expect(result).toBe(expectedResult);
  });
});
