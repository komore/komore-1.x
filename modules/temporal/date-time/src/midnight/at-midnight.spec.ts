import { Month } from '../../date/months/month';
import { getStructuredDateTime } from '../get-structured-date-time';
import { parseLocalDateTime } from '../parse-local-date-time';
import { atMidnight } from './at-midnight';

describe('At midnight', () => {
  it('can move a local date time to occur at midnight', () => {
    given: 'a local date time';
    const localDateTime = parseLocalDateTime('2020-01-01T12:34:56.789');
    when: 'getting the local date time at midnight';
    const localDateTimeAtMidnight = atMidnight(localDateTime);
    expect: 'the local date time to occur at midnight';
    const structuredDateTime = getStructuredDateTime(localDateTimeAtMidnight);
    const { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond } = structuredDateTime;
    expect(year).toBe(2020);
    expect(month).toBe(Month.JANUARY);
    expect(day).toBe(2);
    expect(hour).toBe(0);
    expect(minute).toBe(0);
    expect(second).toBe(0);
    expect(millisecond).toBe(0);
    expect(microsecond).toBe(0);
    expect(nanosecond).toBe(0);
  });
});
