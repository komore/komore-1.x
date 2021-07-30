import { getHours } from '../time/hours/get-hours';
import { convertTimeZone } from './convert-time-zone';
import { parseTimeZone } from './parse-time-zone';

describe('Convert time zone', () => {
  it('can convert an instant from one time zone to another', () => {
    given: 'a zoned date time';
    const zonedDateTime = parseZonedDateTime('2020-01-01T12:34:56.789[Europe/Paris]');
    const targetTimeZone = parseTimeZone('Europe/London');
    const convertedDateTime = convertTimeZone(zonedDateTime, targetTimeZone);
    const hours = getHours(convertedDateTime);
    expect(hours).toBe(11);
  });

  it('takes DST into account', () => {

  });
});
