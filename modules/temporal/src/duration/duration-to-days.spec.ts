import { mockCurrentPlainDateTime } from '@komore/temporal/testing';
import { feature } from '@komore/testing';

import { durationToDays } from './duration-to-days';

feature('Duration to days', () => {
  const currentPlainDateTime = Temporal.PlainDateTime.from('2020-01-01T00:00:00');
  let mockedCurrentPlainDateTime: ReturnType<typeof mockCurrentPlainDateTime>;

  beforeAll(() => {
    mockedCurrentPlainDateTime = mockCurrentPlainDateTime(currentPlainDateTime);
  });

  afterAll(() => mockedCurrentPlainDateTime.clearMock());

  it.each([
    [currentPlainDateTime, 'P2D', 2],
    [currentPlainDateTime, 'P2DT12H', 2.5],
    [undefined, 'P2DT12H', 2.5],
  ])('creates a function that returns a duration in days', (referenceTemporal, value, expectedResult) => {
    given: 'a reference temporal';
    and: 'a duration';
    const duration = Temporal.Duration.from(value);

    when: 'creating a function that returns a duration in days';
    const func = durationToDays(referenceTemporal);
    and: 'calling it';
    const result = func(duration);

    expect: 'the correct number of days to have been returned';
    expect(result).toBe(expectedResult);
  });
});
