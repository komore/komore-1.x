import { findEarliestDate } from './find-earliest-date';
import type { TemporalWithDate } from './temporal-with-date';
import { parseLocalDate } from './parse-local-date';

describe('Find earliest date', () => {
  it('can find the earliest date', () => {
    given: 'a list of local dates';
    const localDate1 = parseLocalDate('2020-06-01');
    const localDate2 = parseLocalDate('2020-01-01');
    const localDate3 = parseLocalDate('2020-12-31');
    const temporals = [localDate1, localDate2, localDate3];
    when: 'finding the earliest date';
    const earliestDate = findEarliestDate(temporals);
    expect: 'the temporal with the earliest date to have been returned';
    expect(earliestDate).toBe(localDate2);
  });

  it('returns undefined when passed an empty list', () => {
    given: 'an empty list of temporals';
    const temporals: ReadonlyArray<TemporalWithDate> = [];
    when: 'finding the earliest date';
    const earliestDate = findEarliestDate(temporals);
    expect: 'undefined to have been returned';
    expect(earliestDate).toBeUndefined();
  });
});
