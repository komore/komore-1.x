import { findEarliestTime } from './find-earliest-time';
import type { TemporalWithTime } from './temporal-with-time';

describe('Find earliest time', () => {
  it('returns undefined when given an empty list', () => {
    given: 'an empty list of temporals';
    const temporals: ReadonlyArray<TemporalWithTime> = [];
    when: 'finding the earliest time';
    const earliestTime = findEarliestTime(temporals);
    expect: 'undefined to be returned';
    expect(earliestTime).toBeUndefined();
  });
});
