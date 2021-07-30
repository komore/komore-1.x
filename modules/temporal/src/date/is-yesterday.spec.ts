import { mockCurrentPlainDate, mockCurrentPlainDateTime, mockCurrentZonedDateTime } from '@komore/temporal/testing';
import { Temporal } from 'proposal-temporal';
import { isYesterday } from './is-yesterday';

describe('Is yesterday', () => {
  const currentPlainDate = Temporal.PlainDate.from('2020-01-01');
  const currentPlainDateTime = Temporal.PlainDateTime.from('2020-01-01T12:34:56.789');
  const currentZonedDateTime = Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789[Europe/Paris]');
  let restoreCurrentPlainDate: ReturnType<typeof mockCurrentPlainDate>;
  let restoreCurrentPlainDateTime: ReturnType<typeof mockCurrentPlainDateTime>;
  let restoreCurrentZonedDateTime: ReturnType<typeof mockCurrentZonedDateTime>;

  beforeAll(() => {
    restoreCurrentPlainDate = mockCurrentPlainDate(currentPlainDate);
    restoreCurrentPlainDateTime = mockCurrentPlainDateTime(currentPlainDateTime);
    restoreCurrentZonedDateTime = mockCurrentZonedDateTime(currentZonedDateTime);
  });

  afterAll(() => {
    restoreCurrentPlainDate();
    restoreCurrentPlainDateTime();
    restoreCurrentZonedDateTime();
  });

  it.each([
    ['plain date', Temporal.PlainDate.from('2020-01-01'), false],
    ['plain date', Temporal.PlainDate.from('2019-12-31'), true],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789'), false],
    ['plain date time', Temporal.PlainDateTime.from('2019-12-31T01:23:45.678'), true],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789[Europe/Paris]'), false],
    ['zoned date time', Temporal.ZonedDateTime.from('2019-12-31T01:23:45.678[Europe/Paris]'), true]
  ])('can test whether a %s occurs yesterday', (_, temporal, expectedResult) => {
    given: 'a temporal';
    when: 'testing whether the temporal occurs yesterday';
    const result = isYesterday(temporal);
    expect: 'yesterday to have been detected correctly';
    expect(result).toBe(expectedResult);
  });
});
