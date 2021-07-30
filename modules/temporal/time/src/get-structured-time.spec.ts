import { getStructuredTime } from './get-structured-time';
import { parseLocalTime } from './parse-local-time';

describe('Get structured time', () => {
  it('cann get structured time information from a local time', () => {
    given: 'a local time';
    const localTime = parseLocalTime('01:02:03.456789123');
    when: 'getting structured time information';
    const structuredTime = getStructuredTime(localTime);
    expect: 'the correct information to be have been extracted';
    expect(structuredTime.hour).toBe(1);
    expect(structuredTime.minute).toBe(2);
    expect(structuredTime.second).toBe(3);
    expect(structuredTime.millisecond).toBe(456);
    expect(structuredTime.microsecond).toBe(789);
    expect(structuredTime.nanosecond).toBe(123);
  });
});
