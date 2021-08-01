import { Temporal } from '@js-temporal/polyfill';
import { mockCurrentPlainDate, mockCurrentPlainDateTime, mockCurrentZonedDateTime } from '@komore/temporal/testing';
import { isNextYear } from './is-next-year';

describe('Is next year', () => {
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
    ['plain date', Temporal.PlainDate.from('2021-01-01'), true],
    ['plain date', Temporal.PlainDate.from('2020-06-01'), false],
    ['plain date', Temporal.PlainDate.from('2019-12-31'), false],
    ['plain date time', Temporal.PlainDateTime.from('2021-01-01T12:34:56.789'), true],
    ['plain date time', Temporal.PlainDateTime.from('2020-06-01T12:34:56.789'), false],
    ['plain date time', Temporal.PlainDateTime.from('2019-12-31T12:34:56.789'), false],
    ['zoned date time', Temporal.PlainDateTime.from('2021-01-01T12:34:56.789[Europe/Paris]'), true],
    ['zoned date time', Temporal.PlainDateTime.from('2020-06-01T12:34:56.789[Europe/Paris]'), false],
    ['zoned date time', Temporal.PlainDateTime.from('2019-12-31T12:34:56.789[Europe/Paris]'), false],
    ['plain year month', Temporal.PlainYearMonth.from('2021-01'), true],
    ['plain year month', Temporal.PlainYearMonth.from('2020-06'), false],
    ['plain year month', Temporal.PlainYearMonth.from('2019-12'), false],
  ])('can test whether a %s occurs next year', (_, temporal, expectedResult) => {
    given: 'a temporal';
    when: 'testing whether the temporal occurs next year';
    const result = isNextYear(temporal);
    expect: 'the correct result to have been returned';
    expect(result).toBe(expectedResult);
  });
});
