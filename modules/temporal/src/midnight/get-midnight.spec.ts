import { getMidnight } from './get-midnight';

describe('Get midnight', () => {
  it('returns the time at midnight', () => {
    when: 'getting the time at midnight';
    const noon = getMidnight();

    expect: 'the correct time to have been returned';
    expect(noon.hour).toBe(0);
    expect(noon.minute).toBe(0);
    expect(noon.second).toBe(0);
    expect(noon.millisecond).toBe(0);
    expect(noon.millisecond).toBe(0);
    expect(noon.nanosecond).toBe(0);
  });
});
