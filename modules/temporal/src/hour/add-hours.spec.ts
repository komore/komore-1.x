import { getStructuredTime } from '../get-structured-time';
import { parseLocalTime } from '../parse-local-time';
import { addHours } from './add-hours';

describe('Add hours', () => {
  it('adds hours to a local time', () => {
    given: 'a local time';
    const localTime = parseLocalTime('05:15');
    when: 'adding hours';
    const updatedTime = addHours(localTime, 5);
    expect: 'the correct number of hours to have been added';
    const { hour, minute } = getStructuredTime(updatedTime);
    expect(hour).toBe(10);
    expect(minute).toBe(15);
  });
});
