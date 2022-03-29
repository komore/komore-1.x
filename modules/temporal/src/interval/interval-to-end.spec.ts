import { Temporal } from '@js-temporal/polyfill';
import { createInterval } from './create-interval';
import { intervalToEnd } from './interval-to-end';

describe('Interval to end', () => {
  it('returns the end of an interval', () => {
    given: 'an interval';
    const start = Temporal.PlainDate.from('2020-01-01');
    const end = Temporal.PlainDate.from('2020-01-02');
    const interval = createInterval(start, end);

    when: 'getting the end of the interval';
    const returnedEnd = intervalToEnd(interval);

    expect: 'the end of the interval to have been returned';
    expect(returnedEnd).toBe(end);
  });
});
