import { Temporal } from '@js-temporal/polyfill';
import { type TemporalWithDate } from '../temporal-with-date';
import { findEarliestDateIndex } from './find-earliest-date-index';

describe('Find earliest date index', () => {
  it('can find the earliest date index', () => {
    given: 'a list of local dates';
    const localDate1 = Temporal.PlainDate.from('2020-06-01');
    const localDate2 = Temporal.PlainDate.from('2020-01-01');
    const localDate3 = Temporal.PlainDate.from('2020-12-31');
    const temporals = [localDate1, localDate2, localDate3];
    when: 'finding the earliest date index';
    const earliestDateIndex = findEarliestDateIndex(temporals);
    expect: 'the instant with the earliest date to have been returned';
    expect(earliestDateIndex).toBe(1);
  });

  it('returns -1 when passed an empty list', () => {
    given: 'an empty list of temporals';
    const temporals: ReadonlyArray<TemporalWithDate> = [];
    when: 'finding the earliest date index';
    const earliestDateIndex = findEarliestDateIndex(temporals);
    expect: '-1 to have been returned';
    expect(earliestDateIndex).toBe(-1);
  });
});
