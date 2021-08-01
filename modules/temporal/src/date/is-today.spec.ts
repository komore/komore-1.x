import { Temporal } from '@js-temporal/polyfill';
import { mockCurrentPlainDate, mockCurrentPlainDateTime, mockCurrentZonedDateTime } from '@komore/temporal/testing';
import { isToday } from './is-today';

describe('Is today', () => {
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
    ['plain date', Temporal.PlainDate.from('2020-01-01'), true],
    ['plain date', Temporal.PlainDate.from('2020-01-02'), false],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789'), true],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-02T01:23:45.678'), false],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789[Europe/Paris]'), true],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-02T01:23:45.678[Europe/Paris]'), false]
  ])('can test whether a %s occurs today', (_, temporal, expectedResult) => {
    given: 'a temporal';
    when: 'testing whether the temporal occurs today';
    const result = isToday(temporal);
    expect: 'today to have been detected correctly';
    expect(result).toBe(expectedResult);
  });
});
