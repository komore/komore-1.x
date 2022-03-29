import { Temporal } from '@js-temporal/polyfill';
import { addMinutes } from './add-minutes';

describe('Add minutes', () => {
  it.each([
    ['plain time', Temporal.PlainTime, '12:34:56.789123456', 4, 38],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789123456', 4, 38],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T12:34:56.789123456[Europe/Paris]', 4, 38],
  ])('can create a function that adds minutes to a %s', (_, temporalClass, value, addedMinutes, expectedMinutes) => {
    given: 'temporal';
    const temporal = temporalClass.from(value);

    when: 'creating a function that adds minutes to the temporal';
    const func = addMinutes(addedMinutes);
    and: 'calling the function';
    const result = func(temporal);

    expect: 'the correct number of minutes to have been added';
    const { hour, minute, second, millisecond, microsecond, nanosecond } = result;
    expect(hour).toBe(temporal.hour);
    expect(minute).toBe(expectedMinutes);
    expect(second).toBe(temporal.second);
    expect(millisecond).toBe(temporal.millisecond);
    expect(microsecond).toBe(temporal.microsecond);
    expect(nanosecond).toBe(temporal.nanosecond);
  });
});
