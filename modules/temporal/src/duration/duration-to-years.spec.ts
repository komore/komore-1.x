import { Temporal } from '@js-temporal/polyfill';
import { mockCurrentPlainDateTime } from '@komore/temporal/testing';
import { durationToYears } from './duration-to-years';

describe('Duration to years', () => {
  const currentPlainDateTime = Temporal.PlainDateTime.from('2020-01-01T00:00:00');
  let mockedCurrentPlainDateTime: ReturnType<typeof mockCurrentPlainDateTime>;

  beforeAll(() => {
    mockedCurrentPlainDateTime = mockCurrentPlainDateTime(currentPlainDateTime);
  });

  afterAll(() => mockedCurrentPlainDateTime.clearMock());

  it.each([
    [currentPlainDateTime, 'P2Y', 2],
    [currentPlainDateTime, 'P2Y182DT12H', 2.5],
    // TODO: open issue asking why the result is the same, 2020 has 366 days while 2021 has 365
    [Temporal.PlainDateTime.from('2021-01-01T00:00:00'), 'P2Y182DT12H', 2.5],
    [undefined, 'P2Y182DT12H', 2.5],
  ])('creates a function that returns a duration in years', (referenceTemporal, value, expectedResult) => {
    given: 'a reference temporal';
    given: 'a duration';
    const duration = Temporal.Duration.from(value);

    when: 'creating a function that returns a duration in years';
    const func = durationToYears(referenceTemporal);
    and: 'calling it';
    const result = func(duration);

    expect: 'the correct number of years to have been returned';
    expect(result).toBe(expectedResult);
  });
});
