import { Temporal } from '@js-temporal/polyfill';
import { toEarliestTime } from './to-earliest-time';

describe('To earliest time', () => {
  it('returns the temporal with the earliest time', () => {
    given: 'two temporals with time';
    const lhs = Temporal.PlainDateTime.from('2020-01-01T12:34:56.789');
    const rhs = Temporal.PlainDateTime.from('2020-01-02T09:12:34.567');
    when: 'getting the earliest time';
    const earliestTime = toEarliestTime(lhs, rhs);
    expect: 'the temporal with the earliest time to have been returned';
    expect(earliestTime).toBe(rhs);
  });

  it('can be used as a reducer function', () => {
    given: 'a list of temporals';
    const a = Temporal.PlainDateTime.from('2020-01-01T12:34:56.789');
    const b = Temporal.PlainDateTime.from('2020-01-02T09:12:34.567');
    const c = Temporal.PlainTime.from('12:34:56.789');
    when: 'reducing to the earliest time';
    const earliestTime = [a, b, c].reduce(toEarliestTime);
    expect: 'the earliest time to have been returned';
    expect(earliestTime).toBe(b);
  });
});
