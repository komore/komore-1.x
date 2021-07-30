import { mockCurrentPlainDate, mockCurrentPlainDateTime, mockCurrentZonedDateTime } from '@komore/temporal/testing';
import { Temporal } from 'proposal-temporal';
import { isNextWeek } from './is-next-week';

describe('Is next week', () => {
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
    ['plain date', Temporal.PlainDate.from('2020-01-04'), false],
    ['plain date', Temporal.PlainDate.from('2020-01-11'), true],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-04T12:34:56.789'), false],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-11T12:34:56.789'), true],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-04T12:34:56.789[Europe/Paris]'), false],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-11T12:34:56.789[Europe/Paris]'), true]
  ])('can test whether a %s occurs during the next week', (_, temporal, expectedResult) => {
    given: 'a temporal';
    console.log(Temporal.PlainDate.from('2021-01-01').weekOfYear);
    when: 'testing whether the temporal occurs during the next week';
    const result = isNextWeek(temporal);
    expect: 'true to be returned if the temporal occurs during the next week';
    expect(result).toBe(expectedResult);
  });

  it.each([
    [Temporal.PlainDate.from('2019-12-23'), Temporal.PlainDate.from('2019-12-29'), false],
    [Temporal.PlainDate.from('2019-12-23'), Temporal.PlainDate.from('2019-12-30'), true],
    [Temporal.PlainDate.from('2019-12-29'), Temporal.PlainDate.from('2019-12-31'), true],
    [Temporal.PlainDate.from('2019-12-29'), Temporal.PlainDate.from('2020-01-01'), true],
    [Temporal.PlainDate.from('2019-12-29'), Temporal.PlainDate.from('2020-01-05'), true],
    [Temporal.PlainDate.from('2019-12-30'), Temporal.PlainDate.from('2020-01-05'), false],
    [Temporal.PlainDate.from('2019-12-30'), Temporal.PlainDate.from('2020-01-06'), true]
  ])('can handle weeks overlapping a year', (currentPlainDate, temporal, expectedResult) => {
    const restore = mockCurrentPlainDate(currentPlainDate);
    given: 'a temporal';
    when: 'testing whether the temporal occurs during the next week';
    const result = isNextWeek(temporal);
    restore();
    expect: 'true to be returned if the temporal occurs during the next week';
    expect(result).toBe(expectedResult);
  });
});
