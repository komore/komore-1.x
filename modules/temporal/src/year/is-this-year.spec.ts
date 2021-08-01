import { Temporal } from '@js-temporal/polyfill';
import { mockCurrentPlainDate, mockCurrentPlainDateTime, mockCurrentZonedDateTime } from '@komore/temporal/testing';
import { isThisYear } from './is-this-year';

describe('Is this year', () => {
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
    ['plain date', Temporal.PlainDate.from('2020-06-01'), true],
    ['plain date', Temporal.PlainDate.from('2021-01-01'), false],
    ['plain date time', Temporal.PlainDateTime.from('2020-06-01T12:34:56.789'), true],
    ['plain date time', Temporal.PlainDateTime.from('2021-01-01T12:34:56.789'), false],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-06-01T12:34:56.789[Europe/Paris]'), true],
    ['zoned date time', Temporal.ZonedDateTime.from('2021-01-01T12:34:56.789[Europe/Paris]'), false],
    ['plain year month', Temporal.PlainYearMonth.from('2020-06'), true],
    ['plain year month', Temporal.PlainYearMonth.from('2021-01'), false]
  ])('can test whether a %s occurs this year', (_, temporal, expectedResult) => {
    given: 'a temporal';
    when: 'testing whether the temporal occurs this year';
    const result = isThisYear(temporal);
    expect: 'true to have been returend if the temporal occurs this year';
    expect(result).toBe(expectedResult);
  });
});
