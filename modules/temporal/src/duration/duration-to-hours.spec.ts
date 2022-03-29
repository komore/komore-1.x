import { Temporal } from '@js-temporal/polyfill';
import { mockCurrentPlainDateTime } from '@komore/temporal/testing';
import { durationToHours } from './duration-to-hours';

describe('Duration to hours', () => {
  const currentPlainDateTime = Temporal.PlainDateTime.from('2020-01-01T00:00:00');
  let mockedCurrentPlainDateTime: ReturnType<typeof mockCurrentPlainDateTime>;

  beforeAll(() => {
    mockedCurrentPlainDateTime = mockCurrentPlainDateTime(currentPlainDateTime);
  });

  afterAll(() => mockedCurrentPlainDateTime.clearMock());

  it.each([
    [currentPlainDateTime, 'PT2H', 2],
    [currentPlainDateTime, 'PT2H30M', 2.5],
    [undefined, 'PT2H30M', 2.5],
  ])('creates a function that returns a duration in hours', (referenceTemporal, value, expectedResult) => {
    given: 'a reference temporal';
    and: 'a duration';
    const duration = Temporal.Duration.from(value);

    when: 'creating a function that returns a duration in hours';
    const func = durationToHours(referenceTemporal);
    and: 'calling it';
    const result = func(duration);

    expect: 'the correct number of hours to have been returned';
    expect(result).toBe(expectedResult);
  });
});
