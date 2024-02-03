import { mockCurrentPlainDate, mockCurrentPlainDateTime, mockCurrentZonedDateTime } from '@komore/temporal/testing';
import { feature } from '@komore/testing';

import { isNextYear } from './is-next-year';

feature('Is next year', () => {
  const currentPlainDate = Temporal.PlainDate.from('2020-01-01');
  const currentPlainDateTime = Temporal.PlainDateTime.from('2020-01-01T12:34:56.789');
  const currentZonedDateTime = Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789[Europe/Paris]');
  let mockedCurrentPlainDate: ReturnType<typeof mockCurrentPlainDate>;
  let mockedCurrentPlainDateTime: ReturnType<typeof mockCurrentPlainDateTime>;
  let mockedCurrentZonedDateTime: ReturnType<typeof mockCurrentZonedDateTime>;

  beforeAll(() => {
    // TODO: feature('xx', withMockedTemporals(yy, ({ zz }) => ))
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
    ['plain date', Temporal.PlainDate, '2021-01-01', true],
    ['plain date', Temporal.PlainDate, '2020-06-01', false],
    ['plain date', Temporal.PlainDate, '2019-12-31', false],
    ['plain date time', Temporal.PlainDateTime, '2021-01-01T12:34:56.789', true],
    ['plain date time', Temporal.PlainDateTime, '2020-06-01T12:34:56.789', false],
    ['plain date time', Temporal.PlainDateTime, '2019-12-31T12:34:56.789', false],
    ['zoned date time', Temporal.PlainDateTime, '2021-01-01T12:34:56.789[Europe/Paris]', true],
    ['zoned date time', Temporal.PlainDateTime, '2020-06-01T12:34:56.789[Europe/Paris]', false],
    ['zoned date time', Temporal.PlainDateTime, '2019-12-31T12:34:56.789[Europe/Paris]', false],
    ['plain year month', Temporal.PlainYearMonth, '2021-01', true],
    ['plain year month', Temporal.PlainYearMonth, '2020-06', false],
    ['plain year month', Temporal.PlainYearMonth, '2019-12', false],
  ])('can test whether a %s occurs next year', (_, temporalClass, value, expectedResult) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'testing whether the temporal occurs next year';
    const result = isNextYear(temporal);

    expect: 'the correct result to have been returned';
    expect(result).toBe(expectedResult);
  });
});
