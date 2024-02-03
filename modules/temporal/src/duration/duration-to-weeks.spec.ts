import { mockCurrentPlainDateTime } from '@komore/temporal/testing';
import { feature } from '@komore/testing';

import { durationToWeeks } from './duration-to-weeks';

feature('Duration to weeks', () => {
  const currentPlainDateTime = Temporal.PlainDateTime.from('2020-01-01T00:00:00');
  let mockedCurrentPlainDateTime: ReturnType<typeof mockCurrentPlainDateTime>;

  beforeAll(() => {
    mockedCurrentPlainDateTime = mockCurrentPlainDateTime(currentPlainDateTime);
  });

  afterAll(() => mockedCurrentPlainDateTime.clearMock());

  it.each([
    [currentPlainDateTime, 'P14D', 2],
    [currentPlainDateTime, 'P17DT12H', 2.5],
    [undefined, 'P17DT12H', 2.5],
  ])('creates a function that returns a duration in weeks', (referenceTemporal, value, expectedResult) => {
    given: 'a reference temporal';
    and: 'a duration';
    const duration = Temporal.Duration.from(value);

    when: 'creating a function that returns a duration in weeks';
    const func = durationToWeeks(referenceTemporal);
    and: 'calling it';
    const result = func(duration);

    expect: 'the correct number of weeks to have been returned';
    expect(result).toBe(expectedResult);
  });
});
