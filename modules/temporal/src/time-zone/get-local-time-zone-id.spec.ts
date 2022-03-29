import { Temporal } from '@js-temporal/polyfill';
import { mockCurrentTimeZone } from '@komore/temporal/testing';
import { getLocalTimeZoneId } from './get-local-time-zone-id';

describe('Get local time zone identifier', () => {
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

  it('returns the local time zone identifier', () => {
    when: 'getting the local time zone identifier';
    const localTimeZoneId = getLocalTimeZoneId();

    expect: 'the correct identifier to have been returned';
    expect(localTimeZoneId).toBe(currentTimeZoneName);
  });
});
