import { createOffsetDateTime } from '../create-offset-date-time';
import { getISO8601DateTime } from './get-iso-8601-date-time';

describe('Get ISO 8601 date time', () => {
  it('returns an ISO 8601 string', () => {
    given: 'a date time';
    const offsetDateTime = createOffsetDateTime('2020-01-01T01:00:00.000Z');
    when: 'getting an ISO 8601 string';
    const str = getISO8601DateTime(offsetDateTime);
    expect: 'a valid string to be returned';
    expect(str).toBe('2020-01-01T01:00:00.000Z');
  });
});
