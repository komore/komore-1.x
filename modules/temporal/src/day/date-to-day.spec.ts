import { dateToDay } from './date-to-day';

feature('Date to day', () => {
  it.each([
    ['plain date', Temporal.PlainDate, '2020-01-01', 1],
    ['plain date', Temporal.PlainDate, '2020-01-15', 15],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789', 1],
    ['plain date time', Temporal.PlainDateTime, '2020-01-15T12:34:56.789', 15],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T12:34:56.789[Europe/Paris]', 1],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-15T12:34:56.789[Europe/Paris]', 15],
  ])('can return the day of the month from a %s', (_, temporalClass, value, expectedDay) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'getting the day of the month';
    const result = dateToDay(temporal);

    expect: 'the correct day to have been returned';
    expect(result).toBe(expectedDay);
  });
});
