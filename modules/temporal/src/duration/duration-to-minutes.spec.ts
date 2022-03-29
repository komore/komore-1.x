import { Temporal } from '@js-temporal/polyfill';
import { mockCurrentPlainDateTime } from '@komore/temporal/testing';
import { durationToMinutes } from './duration-to-minutes';

describe('To duration in minutes', () => {
  const currentPlainDateTime = Temporal.PlainDateTime.from('2020-01-01T00:00:00');
  let mockedCurrentPlainDateTime: ReturnType<typeof mockCurrentPlainDateTime>;

  beforeAll(() => {
    mockedCurrentPlainDateTime = mockCurrentPlainDateTime(currentPlainDateTime);
  });

  afterAll(() => mockedCurrentPlainDateTime.clearMock());

  it.each([
    [currentPlainDateTime, 'PT2M', 2],
    [currentPlainDateTime, 'PT2M30S', 2.5],
    [undefined, 'PT2M30S', 2.5],
    [currentPlainDateTime, 'PT30S', 0.5],
  ])('returns the duration in minutes', (referenceTemporal, value, expectedResult) => {
    given: 'a reference duration';
    and: 'a duration';
    const duration = Temporal.Duration.from(value);

    when: 'creating a function that returns a duration in minutes';
    const func = durationToMinutes(referenceTemporal);
    and: 'callig it';
    const result = func(duration);

    expect: 'the correct number of minutes to have been returned';
    expect(result).toBe(expectedResult);
  });
});
