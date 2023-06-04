import { Temporal } from '@js-temporal/polyfill';

import { mockCurrentTimeZone } from '@komore/temporal/testing';
import { expectEqual, feature, scenario } from '@komore/testing';

import { getLocalTimeZoneId } from './get-local-time-zone-id';

feature('Get local time zone identifier', () => {
  const currentTimeZoneId = 'Europe/Paris';
  // NOTE: should not return TimeZone | TimeZoneProtocol?
  const currentTimeZone = Temporal.TimeZone.from(currentTimeZoneId) as Temporal.TimeZone;
  let mockedCurrentTimeZone: ReturnType<typeof mockCurrentTimeZone>;

  beforeAll(() => {
    mockedCurrentTimeZone = mockCurrentTimeZone(currentTimeZone);
  });

  afterAll(() => {
    mockedCurrentTimeZone.clearMock();
  });

  scenario('returns the local time zone identifier', () => {
    when: 'getting the local time zone identifier';
    const localTimeZoneId = getLocalTimeZoneId();

    expect: 'the correct identifier to have been returned';
    expectEqual(localTimeZoneId)(currentTimeZoneId);
  });
});
