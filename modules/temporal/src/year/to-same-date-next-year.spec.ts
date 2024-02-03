import { mockCurrentPlainDate, mockCurrentPlainDateTime, mockCurrentZonedDateTime } from '@komore/temporal/testing';
import { feature } from '@komore/testing';

import { toSameDateNextYear } from './to-same-date-next-year';

feature('To same date next year', () => {
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
    ['plain date', Temporal.PlainDate, '2020-01-01', 2021],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789', 2021],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T12:34:56.789[Europe/Paris]', 2021],
  ])('can return a %s that occurs next year at the same date and time', (_, temporalClass, value, expectedYear) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'getting a temporal occuring next year';
    const result = toSameDateNextYear(temporal);

    expect: 'a temporal occuring next year at the same date and time to have been returned';
    const { year, month, day } = result;
    expect(year).toBe(expectedYear);
    expect(month).toBe(temporal.month);
    expect(day).toBe(temporal.day);
  });
});
