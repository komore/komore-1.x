import { feature } from '@komore/testing';

import { toLatestTime } from './to-latest-time';

feature('To latest time', {
  'returns the temporal with the latest time'() {
    given: 'two temporals with time';
    const lhs = Temporal.PlainDateTime.from('2020-01-01T12:34:56.789');
    const rhs = Temporal.PlainDateTime.from('2020-01-02T09:12:34.567');
    when: 'getting the latest time';
    const latestTime = toLatestTime(lhs, rhs);
    expect: 'the temporal with the latest time to have been returned';
    latestTime === lhs;
  },

  'can be used as a reducer function'() {
    given: 'a list of temporals';
    const a = Temporal.PlainDateTime.from('2020-01-01T12:34:56.789');
    const b = Temporal.PlainDateTime.from('2020-01-02T09:12:34.567');
    const c = Temporal.PlainTime.from('12:34:56.789');
    when: 'reducing to the latest time';
    const latestTime = [a, b, c].reduce(toLatestTime);
    expect: 'the latest time to have been returned';
    latestTime === a;
  },
});
