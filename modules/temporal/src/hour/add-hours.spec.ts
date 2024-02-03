import { feature } from '@komore/testing';

import { addHours } from './add-hours';

feature('Add hours', () => {
  it.each([
    ['plain time', Temporal.PlainTime, '12:34:56.789123456', 4, 16],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789123456', 4, 16],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T12:34:56.789123456[Europe/Paris]', 4, 16],
  ])('can create a function that adds hours to a %s', (_, temporalClass, value, addedHours, expectedHour) => {
    given: 'temporal';
    const temporal = temporalClass.from(value);

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
