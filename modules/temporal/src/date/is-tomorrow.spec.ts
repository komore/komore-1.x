import { Temporal } from '../temporal';
import { mockCurrentPlainDate, mockCurrentPlainDateTime, mockCurrentZonedDateTime } from '@komore/temporal/testing';
import { isTomorrow } from './is-tomorrow';

describe('Is tomorrow', () => {
  const currentPlainDate = Temporal.PlainDate.from('2020-01-01');
  const currentPlainDateTime = Temporal.PlainDateTime.from('2020-01-01T12:34:56.789');
  const currentZonedDateTime = Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789[Europe/Paris]');
  let mockedCurrentPlainDate: ReturnType<typeof mockCurrentPlainDate>;
  let mockedCurrentPlainDateTime: ReturnType<typeof mockCurrentPlainDateTime>;
  let mockedCurrentZonedDateTime: ReturnType<typeof mockCurrentZonedDateTime>;

  beforeAll(() => {
    mockedCurrentPlainDate = mockCurrentPlainDate(currentPlainDate);
    mockedCurrentPlainDateTime = mockCurrentPlainDateTime(currentPlainDateTime);
    mockedCurrentZonedDateTime = mockCurrentZonedDateTime(currentZonedDateTime);
  });

  afterAll(() => {
    mockedCurrentPlainDate.clearMock();
    mockedCurrentPlainDateTime.clearMock();
    mockedCurrentZonedDateTime.clearMock();
  });

  it.each([
    ['plain date', Temporal.PlainDate, '2020-01-01', false],
    ['plain date', Temporal.PlainDate, '2020-01-02', true],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789', false],
    ['plain date time', Temporal.PlainDateTime, '2020-01-02T01:23:45.678', true],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T12:34:56.789[Europe/Paris]', false],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-02T01:23:45.678[Europe/Paris]', true],
  ])('can test whether a %s occurs tomorrow', (_, temporalClass, value, expectedResult) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'testing whether the temporal occurs tomorrow';
    const result = isTomorrow(temporal);

    expect: 'tomorrow to have been detected correctly';
    expect(result).toBe(expectedResult);
  });
});
