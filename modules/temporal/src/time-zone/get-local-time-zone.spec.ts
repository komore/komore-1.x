import { Temporal } from '@js-temporal/polyfill';
import { mockCurrentTimeZone } from '@komore/temporal/testing';
import { getLocalTimeZone } from './get-local-time-zone';

describe('Get local time zone', () => {
  const currentTimeZoneName = 'Europe/Paris';
  const currentTimeZone = Temporal.TimeZone.from(currentTimeZoneName);
  let restoreCurrentTimeZone: ReturnType<typeof mockCurrentTimeZone>;

  beforeAll(() => {
    restoreCurrentTimeZone = mockCurrentTimeZone(currentTimeZone);
  });

  afterAll(() => {
    restoreCurrentTimeZone();
  });

  it('returns the local time zone', () => {
    when: 'getting the local time zone';
    const localTimeZone = getLocalTimeZone();
    expect: 'the correct time zone to have been returned';
    expect(localTimeZone.id).toBe(currentTimeZoneName);
  });
});
