import { mockCurrentPlainDateTime } from '@komore/temporal/testing';
import { feature } from '@komore/testing';

import { durationToSeconds } from './duration-to-seconds';

feature('Duration to seconds', () => {
  const currentPlainDateTime = Temporal.PlainDateTime.from('2020-01-01T00:00:00');
  let mockedCurrentPlainDateTime: ReturnType<typeof mockCurrentPlainDateTime>;

  beforeAll(() => {
    mockedCurrentPlainDateTime = mockCurrentPlainDateTime(currentPlainDateTime);
  });

  afterAll(() => mockedCurrentPlainDateTime.clearMock());

  it.each([
    [currentPlainDateTime, 'PT2S', 2],
    [currentPlainDateTime, 'PT2.5S', 2.5],
    [undefined, 'PT2.5S', 2.5],
    [currentPlainDateTime, 'PT0.5S', 0.5],
  ])('creates a function that returns a duration in seconds', (referenceTemporal, value, expectedResult) => {
    given: 'a duration';
    const duration = Temporal.Duration.from(value);

    when: 'creating a function that returns a duration in seconds';
    const func = durationToSeconds(referenceTemporal);
    and: 'calling it';
    const result = func(duration);

    expect: 'the correct number of seconds to have been returned';
    expect(result).toBe(expectedResult);
  });
});
