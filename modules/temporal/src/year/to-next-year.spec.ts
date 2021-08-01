import { Temporal } from '@js-temporal/polyfill';
import { mockCurrentPlainDate, mockCurrentPlainDateTime, mockCurrentZonedDateTime } from '@komore/temporal/testing';
import { toNextYear } from './to-next-year';

describe('To next year', () => {
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
    ['plain date', Temporal.PlainDate.from('2020-01-01'), 2021],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789'), 2021],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789[Europe/Paris]'), 2021]
  ])('can return a %s that occurs next year at the same date and time', (_, temporal, expectedYear) => {
    given: 'a temporal';
    when: 'getting a temporal occuring next year';
    const result = toNextYear(temporal);
    expect: 'a temporal occuring next year at the same date and time to have been returned';
    const { year, month, day } = result;
    expect(year).toBe(expectedYear);
    expect(month).toBe(temporal.month);
    expect(day).toBe(temporal.day);
  });
});
