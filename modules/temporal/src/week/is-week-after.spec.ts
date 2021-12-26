import { Temporal } from '@js-temporal/polyfill';
import { isWeekAfter } from './is-week-after';

describe('Is week after', () => {
  const referencePd = Temporal.PlainDate.from('2020-01-01');
  const referencePdt = Temporal.PlainDateTime.from('2020-01-01T12:34:56.789');
  const referenceZdt = Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789[Europe/Paris]');

  it.each([
    ['plain date', referencePd, Temporal.PlainDate.from('2020-01-04'), false],
    ['plain date', referencePd, Temporal.PlainDate.from('2020-01-07'), true],
    ['plain date', referencePd, Temporal.PlainDate.from('2020-01-11'), true],
    ['plain date time', referencePdt, Temporal.PlainDateTime.from('2020-01-04T12:34:56.789'), false],
    ['plain date time', referencePdt, Temporal.PlainDateTime.from('2020-01-07T12:34:56.789'), true],
    ['plain date time', referencePdt, Temporal.PlainDateTime.from('2020-01-11T12:34:56.789'), true],
    ['zoned date time', referenceZdt, Temporal.ZonedDateTime.from('2020-01-04T12:34:56.789[Europe/Paris]'), false],
    ['zoned date time', referenceZdt, Temporal.ZonedDateTime.from('2020-01-07T12:34:56.789[Europe/Paris]'), true],
    ['zoned date time', referenceZdt, Temporal.ZonedDateTime.from('2020-01-11T12:34:56.789[Europe/Paris]'), true]
  ])(
    'can test whether a %s occurs a week after a reference temporal temporal',
    (_, referenceTemporal, temporal, expectedResult) => {
      given: 'a function that tests whether a temporal occurs a week after a reference temporal';
      const func = isWeekAfter(referenceTemporal);
      when: 'calling the function';
      const result = func(temporal);
      expect: 'true to be returned if the temporal occurs the week after the reference temporal';
      expect(result).toBe(expectedResult);
    }
  );

  it.each([
    [Temporal.PlainDate.from('2019-12-23'), Temporal.PlainDate.from('2019-12-29'), false],
    [Temporal.PlainDate.from('2019-12-23'), Temporal.PlainDate.from('2019-12-30'), true],
    [Temporal.PlainDate.from('2019-12-29'), Temporal.PlainDate.from('2019-12-31'), true],
    [Temporal.PlainDate.from('2019-12-29'), Temporal.PlainDate.from('2020-01-01'), true],
    [Temporal.PlainDate.from('2019-12-29'), Temporal.PlainDate.from('2020-01-05'), true],
    [Temporal.PlainDate.from('2019-12-30'), Temporal.PlainDate.from('2020-01-05'), false],
    [Temporal.PlainDate.from('2019-12-30'), Temporal.PlainDate.from('2020-01-06'), true]
  ])('can handle weeks overlapping a year', (referenceTemporal, temporal, expectedResult) => {
    given: 'a function that tests whether a temporal occurs a week after a reference temporal';
    const func = isWeekAfter(referenceTemporal);
    when: 'calling the function';
    const result = func(temporal);
    expect: 'true to be returned if the temporal occurs during the next after the reference temporal';
    expect(result).toBe(expectedResult);
  });
});
