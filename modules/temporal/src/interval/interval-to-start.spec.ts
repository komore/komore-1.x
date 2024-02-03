import { feature } from '@komore/testing';

import { createInterval } from './create-interval';
import { intervalToStart } from './interval-to-start';

feature('Interval to start', () => {
  it('returns the start of an interval', () => {
    given: 'an interval';
    const start = Temporal.PlainDate.from('2020-01-01');
    const end = Temporal.PlainDate.from('2020-01-02');
    const interval = createInterval(start, end);

    when: 'getting the start of the interval';
    const returnedStart = intervalToStart(interval);

    expect: 'the start of the interval to have been returned';
    expect(returnedStart).toBe(start);
  });

  it('returns the start of a repeating interval', () => {
    given: 'a repeating interval';
    const start = Temporal.PlainDate.from('2020-01-01');
    const end = Temporal.PlainDate.from('2020-01-02');
    const interval = createInterval(start, end);

    when: 'getting the start of the interval';
    const returnedStart = intervalToStart(interval);

    expect: 'the start of the interval to have been returned';
    expect(returnedStart).toBe(start);
  });
});
