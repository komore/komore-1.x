import { feature } from '@komore/testing';

import { isAfterNoon } from './is-after-noon';

feature('Is after noon', () => {
  it.each([
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:00:00.000000001', true],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:00:00.000000000', false],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T11:59:59.999999999', false],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T12:00:00.000000001[Europe/Paris]', true],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T12:00:00.000000000[Europe/Paris]', false],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T11:59:59.999999999[Europe/Paris]', false],
    ['plain time', Temporal.PlainTime, '12:00:00.000000001', true],
    ['plain time', Temporal.PlainTime, '12:00:00.000000000', false],
    ['plain time', Temporal.PlainTime, '11:59:59.999999999', false],
  ])('can test whether a %s occurs after noon', (_, temporalClass, value, expectedResult) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'testing whether the temporal occurs after noon';
    const result = isAfterNoon(temporal);

    expect: 'true to be returned when the temporal occurs after noon';
    expect(result).toBe(expectedResult);
  });
});
