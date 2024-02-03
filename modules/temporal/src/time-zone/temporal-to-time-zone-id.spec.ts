import { feature } from '@komore/testing';

import { temporalToTimeZoneId } from './temporal-to-time-zone-id';

feature('Temporal to time zone identifier', {
  // TODO: all temporal types
  'can return a time zone identifier from a %s'() {
    given: 'a zoned date time';
    const timeZoneId = 'Europe/Paris';
    const zdt = Temporal.ZonedDateTime.from(`2020-01-01T12:34:56.789[${timeZoneId}]`);

    when: 'getting the time zone identifier';
    const result = temporalToTimeZoneId(zdt);

    expect: 'the correct time zone identifier to have been returned';
    result === timeZoneId;
  },
});
