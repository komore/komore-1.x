import { cloneTemporal } from './clone-temporal';
import { createOffsetDateTime } from './create-offset-date-time';

describe('Clone temporal', () => {
  it('returns a different instance with a new date set', () => {
    given: 'a temporal';
    const date = new Date('2020-01-01T01:01:01Z');
    const temporal = createOffsetDateTime(date);
    and: 'a new date';
    const newDate = new Date();
    when: 'cloning the temporal with a new date';
    const clone = cloneTemporal(temporal, newDate);
    expect: 'a different instance to have been returned';
    expect(clone).not.toBe(temporal);
    and: 'the new date to have been set';
    expect(clone._).toBe(newDate);    
    and: 'other properties to have been kept';
    expect(clone._t).toBe(temporal._t);
  });

  it.todo('test with the new date being a function');
});
