import { fromArray } from '@komore/reactive';
import { createTestScheduler } from '@komore/reactive/testing';
import { numberToLocalizedUnit } from './number-to-localized-unit';

describe('Localize unit', () => {
  const testScheduler = createTestScheduler();

  it(
    'transforms emitted number values into unit strings',
    testScheduler(({ expectObservable }) => {
      given: 'a localize unit operator function created with no parameters';
      const operatorFunction = numberToLocalizedUnit('kilometer');
      when: 'applying the operator to number values';
      const value1 = 42;
      const value2 = 21;
      const $ = fromArray([value1, value2]).pipe(operatorFunction);
      expect: 'the number values to have been translated to unit strings';
      expectObservable($).toBe('(ab|)', {
        a: `${value1} km`,
        b: `${value2} km`,
      });
    })
  );
});
