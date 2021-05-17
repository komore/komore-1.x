import { getYear } from './get-year';
import { createLocalDate } from '../create-local-date';

describe('Get year', () => {
  it('returns the full year for a local date', () => {
    given: 'a local date';
    const date = new Date();
    const dateTime = createLocalDate(date);
  });
});
