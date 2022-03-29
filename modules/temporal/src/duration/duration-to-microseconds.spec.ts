import { Temporal } from '@js-temporal/polyfill';
import { mockCurrentPlainDateTime } from '@komore/temporal/testing';
import { durationToMicroseconds } from './duration-to-microseconds';

describe('Duration to microseconds', () => {
  const currentPlainDateTime = Temporal.PlainDateTime.from('2020-01-01T00:00:00');
  let mockedCurrentPlainDateTime: ReturnType<typeof mockCurrentPlainDateTime>;

  beforeAll(() => {
    mockedCurrentPlainDateTime = mockCurrentPlainDateTime(currentPlainDateTime);
  });

  afterAll(() => mockedCurrentPlainDateTime.clearMock());

  it.each([
    [currentPlainDateTime, 'PT0.000123S', 123],
    [currentPlainDateTime, 'PT0.0000015S', 1.5],
    [undefined, 'PT0.0000015S', 1.5],
    [currentPlainDateTime, 'PT1M30.123456S', 90123456],
  ])('returns a duration in microseconds', (referenceTemporal, value, expectedResult) => {
    given: 'a reference temporal';
    and: 'a duration';
    const duration = Temporal.Duration.from(value);

    when: 'creating a function that returns the duration in microseconds';
    const func = durationToMicroseconds(referenceTemporal);
    and: 'calling it';
    const result = func(duration);

    expect: 'the correct number of microseconds to have been returned';
    expect(result).toBe(expectedResult);
  });
});
