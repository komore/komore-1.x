import { Temporal } from '@js-temporal/polyfill';
import { mockCurrentTimeZone } from '@komore/temporal/testing';
import { getLocalTimeZone } from './get-local-time-zone';

describe('Get local time zone', () => {
  const currentTimeZoneName = 'Europe/Paris';
  // NOTE: should not return TimeZone | TimeZoneProtocol?
  const currentTimeZone = Temporal.TimeZone.from(currentTimeZoneName) as Temporal.TimeZone;
  let mockedCurrentTimeZone: ReturnType<typeof mockCurrentTimeZone>;

  beforeAll(() => {
    mockedCurrentTimeZone = mockCurrentTimeZone(currentTimeZone);
  });

  afterAll(() => {
    mockedCurrentTimeZone.clearMock();
  });

  it('returns the local time zone', () => {
    when: 'getting the local time zone';
    const localTimeZone = getLocalTimeZone();

    expect: 'the correct time zone to have been returned';
    expect(localTimeZone.id).toBe(currentTimeZoneName);
  });
});
