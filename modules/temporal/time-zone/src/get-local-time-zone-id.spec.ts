import { getLocalTimeZoneId } from './get-local-time-zone-id';

describe('Get local time zone identifier', () => {
  it('returns the local time zone identifier', () => {
    when: 'getting the local time zone identifier';
    const localTimeZoneId = getLocalTimeZoneId();
    expect: 'the correct identifier to have been returned';
    expect(localTimeZoneId).toBe('Europe/Paris');
  });
});
