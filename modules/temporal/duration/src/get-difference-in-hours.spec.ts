import { parseLocalTime } from '../parse-local-time';
import { getDifferenceInHours } from './get-difference-in-hours';

describe('Get difference in hours', () => {
  it('can get the difference between two local times', () => {
    given: 'two local times';
    const from = parseLocalTime('08:35');
    const until = parseLocalTime('10:35');
    when: 'getting the difference in hours';
    const difference = getDifferenceInHours(from, until);
    expect: 'the correct number of hours to have been returned';
    expect(difference).toBe(2);
  })
});
