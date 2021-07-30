import { getTimeInformation } from '../get-time-information';
import { getMinutes } from '../minute/get-minutes';
import { parseLocalTime } from '../parse-local-time';
import { getHours } from './get-hours';
import { roundToNextHour } from './round-to-next-hour';

describe('Round to next hour', () => {
  it('can round a local time to the next hour', () => {
    given: 'a local time';
    const localTime = parseLocalTime('08:35');
    when: 'rounding to the next hour';
    const roundedTime = roundToNextHour(localTime);
    expect: 'a local time rounded to the next hour to have been returned';
    const { hours, minutes, seconds, nanoseconds } = getTimeInformation(roundedTime);
    expect(timeInformation.).toBe()
  });
});
