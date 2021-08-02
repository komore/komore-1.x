import { Temporal } from '@js-temporal/polyfill';
import { subtractHours } from './subtract-hours';

describe('Subtract hours', () => {
  it.each([
    ['plain time', Temporal.PlainTime.from('12:34:56.789123456'), 4, 8],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789123456'), 4, 8],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789123456[Europe/Paris]'), 4, 8]
  ])('can create a function that subtracts hours from a %s', (_, temporal, subtractedHours, expectedHour) => {
    given: 'temporal';
    when: 'creating a function that subtracts hours from the temporal';
    const func = subtractHours(subtractedHours);
    and: 'calling the function';
    const result = func(temporal);
    expect: 'the correct number of hours to have been subtracted';
    const { hour, minute, second, millisecond, microsecond, nanosecond } = result;
    expect(hour).toBe(expectedHour);
    expect(minute).toBe(temporal.minute);
    expect(second).toBe(temporal.second);
    expect(millisecond).toBe(temporal.millisecond);
    expect(microsecond).toBe(temporal.microsecond);
    expect(nanosecond).toBe(temporal.nanosecond);
  });
});
