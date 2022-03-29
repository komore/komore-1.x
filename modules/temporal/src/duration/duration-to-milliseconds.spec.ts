import { Temporal } from '@js-temporal/polyfill';
import { mockCurrentPlainDateTime } from '@komore/temporal/testing';
import { durationToMilliseconds } from './duration-to-milliseconds';

describe('Duration to milliseconds', () => {
  const currentPlainDateTime = Temporal.PlainDateTime.from('2020-01-01T00:00:00');
  let mockedCurrentPlainDateTime: ReturnType<typeof mockCurrentPlainDateTime>;

  beforeAll(() => {
    mockedCurrentPlainDateTime = mockCurrentPlainDateTime(currentPlainDateTime);
  });

  afterAll(() => mockedCurrentPlainDateTime.clearMock());

  it.each([
    [currentPlainDateTime, 'PT0.123S', 123],
    [currentPlainDateTime, 'PT0.0015S', 1.5],
    [undefined, 'PT0.0015S', 1.5],
    [currentPlainDateTime, 'PT1M30.123S', 90123],
  ])('returns a duration in milliseconds', (referenceTemporal, value, expectedResult) => {
    given: 'a reference temporal';
    and: 'a duration';
    const duration = Temporal.Duration.from(value);

    when: 'creating a function that returns the duration in milliseconds';
    const func = durationToMilliseconds(referenceTemporal);
    and: 'calling it';
    const result = func(duration);

    expect: 'the correct number of milliseconds to have been returned';
    expect(result).toBe(expectedResult);
  });
});
