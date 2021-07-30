import { parseLocalTime } from '../parse-local-time';
import { isSameHour } from './is-same-hour';

describe('Is same hour', () => {
  describe('When two instants occur during the same hour', () => {
    test.each([['local times', parseLocalTime('08:33'), parseLocalTime('08:15')]])(
      'with %s',
      (_, instant1, instant2) => {
        given: 'two times occuring during the same hour';
        when: 'testing whether they occur during the same hour';
        const result = isSameHour(instant1, instant2);
        expect: 'true to have been returned';
        expect(result).toBe(true);
      }
    );
  });

  describe('When two instants do not occur during the same hour', () => {
    test.each([['local times', parseLocalTime('08:33'), parseLocalTime('09:15')]])('with %s', (_, instant1, instant2) => {
      given: 'two times occuring at different hours';
      when: 'testing whether they occur during the same hour';
      const result = isSameHour(instant1, instant2);
      expect: 'false to have been returned';
      expect(result).toBe(false);
    });
  });
});

// TODO: test with different time zones (need to convert to plain date first?)
