import { findLatestDate } from './find-latest-date';
import type { TemporalWithDate } from './temporal-with-date';
import { parseLocalDate } from './parse-local-date';

describe('Find latest date', () => {
  it('can find the latest date', () => {
    given: 'a list of local dates';
    const localDate1 = parseLocalDate('2020-01-01');
    const localDate2 = parseLocalDate('2020-12-31');
    const localDate3 = parseLocalDate('2020-06-01');
    const temporals = [localDate1, localDate2, localDate3];
    when: 'finding the latest date';
    const latestDate = findLatestDate(temporals);
    expect: 'the temporal with the latest date to have been returned';
    expect(latestDate).toBe(localDate2);
  });

  it('returns undefined when passed an empty list', () => {
    given: 'an empty list of temporals';
    const temporals: ReadonlyArray<TemporalWithDate> = [];
    when: 'finding the latest date';
    const latestDate = findLatestDate(temporals);
    expect: 'undefined to have been returned';
    expect(latestDate).toBeUndefined();
  });
});
