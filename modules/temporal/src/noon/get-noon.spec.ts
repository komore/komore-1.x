import { getNoon } from './get-noon';

describe('Get noon', () => {
  it('returns the time at noon', () => {
    when: 'getting the time at noon';
    const noon = getNoon();

    expect: 'the correct time to have been returned';
    expect(noon.hour).toBe(12);
    expect(noon.minute).toBe(0);
    expect(noon.second).toBe(0);
    expect(noon.millisecond).toBe(0);
    expect(noon.millisecond).toBe(0);
    expect(noon.nanosecond).toBe(0);
  });
});
