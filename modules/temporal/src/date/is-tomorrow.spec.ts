import { Temporal } from '@js-temporal/polyfill';
import { mockCurrentPlainDate, mockCurrentPlainDateTime, mockCurrentZonedDateTime } from '@komore/temporal/testing';
import { isTomorrow } from './is-tomorrow';

describe('Is tomorrow', () => {
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
    ['plain date', Temporal.PlainDate.from('2020-01-02'), true],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789'), false],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-02T01:23:45.678'), true],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789[Europe/Paris]'), false],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-02T01:23:45.678[Europe/Paris]'), true]
  ])('can test whether a %s occurs tomorrow', (_, temporal, expectedResult) => {
    given: 'a temporal';
    when: 'testing whether the temporal occurs tomorrow';
    const result = isTomorrow(temporal);
    expect: 'tomorrow to have been detected correctly';
    expect(result).toBe(expectedResult);
  });
});
