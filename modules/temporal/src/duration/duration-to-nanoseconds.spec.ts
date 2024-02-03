import { mockCurrentPlainDateTime } from '@komore/temporal/testing';
import { feature } from '@komore/testing';

import { durationToNanoseconds } from './duration-to-nanoseconds';

feature('Duration to nanoseconds', () => {
  const currentPlainDateTime = Temporal.PlainDateTime.from('2020-01-01T00:00:00');
  let mockedCurrentPlainDateTime: ReturnType<typeof mockCurrentPlainDateTime>;

  beforeAll(() => {
    mockedCurrentPlainDateTime = mockCurrentPlainDateTime(currentPlainDateTime);
  });

  afterAll(() => mockedCurrentPlainDateTime.clearMock());

  it.each([
    [currentPlainDateTime, 'PT0.000000123S', 123],
    [currentPlainDateTime, 'PT0.000000001S', 1],
    [undefined, 'PT0.000000001S', 1],
    [currentPlainDateTime, 'PT1M30.123456789S', 90123456789],
  ])('returns a duration in nanoseconds', (referenceTemporal, value, expectedResult) => {
    given: 'a reference temporal';
    and: 'a duration';
    const duration = Temporal.Duration.from(value);

    when: 'creating a function that returns the duration in nanoseconds';
    const func = durationToNanoseconds(referenceTemporal);
    and: 'calling it';
    const result = func(duration);

    expect: 'the correct number of nanoseconds to have been returned';
    expect(result).toBe(expectedResult);
  });
});
