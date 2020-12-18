import { advanceTo } from 'jest-date-mock';
import { DateProviderDefault } from './date-provider-default';

describe('Date provider default', () => {
  const dateProvider = new DateProviderDefault();

  it('returns the current date/time', () => {
    // given
    advanceTo(12345678);
    // when
    const now = dateProvider.getDate();
    // then
    expect(now.getTime()).toBe(12345678);
  });
});
