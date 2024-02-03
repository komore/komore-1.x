import { mockCurrentPlainDateTime } from '@komore/temporal/testing';
import { feature } from '@komore/testing';

import { durationToMonths } from './duration-to-months';

feature('Duration to months', () => {
  const currentPlainDateTime = Temporal.PlainDateTime.from('2020-01-01T00:00:00');
  let mockedCurrentPlainDateTime: ReturnType<typeof mockCurrentPlainDateTime>;

  beforeAll(() => {
    mockedCurrentPlainDateTime = mockCurrentPlainDateTime(currentPlainDateTime);
  });

  afterAll(() => mockedCurrentPlainDateTime.clearMock());

  it.each([
    [currentPlainDateTime, 'P2M', 2],
    [currentPlainDateTime, 'P2M15DT12H', 2.5],
    [undefined, 'P2M15DT12H', 2.5],
    [Temporal.PlainDateTime.from('2020-02-01T00:00:00'), 'P2M15D', 2.5],
  ])('creates a function that returns a duration in months', (referenceTemporal, value, expectedResult) => {
    given: 'a reference temporal';
    and: 'a duration';
    const duration = Temporal.Duration.from(value);

    when: 'creating a function that returns a duration in months';
    const func = durationToMonths(referenceTemporal);
    and: 'calling it';
    const result = func(duration);

    expect: 'the correct number of months to have been returned';
    expect(result).toBe(expectedResult);
  });
});
