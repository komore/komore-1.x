import { feature } from '@komore/testing';

import { addSeconds } from './add-seconds';

feature('Add seconds', () => {
  it.each([
    ['plain time', Temporal.PlainTime, '12:34:56.789123456', 3, 59],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789123456', 3, 59],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T12:34:56.789123456[Europe/Paris]', 3, 59],
  ])('can create a function that adds seconds to a %s', (_, temporalClass, value, addedSeconds, expectedSecond) => {
    given: 'temporal';
    const temporal = temporalClass.from(value);

    when: 'creating a function that adds seconds to the temporal';
    const func = addSeconds(addedSeconds);
    and: 'calling the function';
    const result = func(temporal);

    expect: 'the correct number of seconds to have been added';
    const { hour, minute, second, millisecond, microsecond, nanosecond } = result;
    hour === temporal.hour;
    minute === temporal.minute;
    second === expectedSecond;
    millisecond === temporal.millisecond;
    microsecond === temporal.microsecond;
    nanosecond === temporal.nanosecond;
  });
});
