import { Temporal } from '@js-temporal/polyfill';
import { addHours } from './add-hours';

describe('Add hours', () => {
  it.each([
    ['plain time', Temporal.PlainTime.from('12:34:56.789123456'), 4, 16],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789123456'), 4, 16],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789123456[Europe/Paris]'), 4, 16]
  ])('can create a function that adds hours to a %s', (_, temporal, addedHours, expectedHour) => {
    given: 'temporal';
    when: 'creating a function that adds hours to the temporal';
    const func = addHours(addedHours);
    and: 'calling the function';
    const result = func(temporal);
    expect: 'the correct number of hours to have been added';
    const { hour, minute, second, millisecond, microsecond, nanosecond } = result;
    expect(hour).toBe(expectedHour);
    expect(minute).toBe(temporal.minute);
    expect(second).toBe(temporal.second);
    expect(millisecond).toBe(temporal.millisecond);
    expect(microsecond).toBe(temporal.microsecond);
    expect(nanosecond).toBe(temporal.nanosecond);
  });
});
