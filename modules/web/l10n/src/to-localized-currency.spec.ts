import { of } from '@komore/reactive';
import { switchMap } from '@komore/reactive/operators';
import { createTestScheduler } from '@komore/reactive/testing';
import { setDefaultCurrency } from './default-currency';
import { toLocalizedCurrency } from './to-localized-currency';

describe('To localized currency', () => {
  const testScheduler = createTestScheduler();
  const space = '\xa0';

  setDefaultCurrency('USD');

  it(
    'transforms emitted number values into currency strings',
    testScheduler(({ expectObservable }) => {
      given: 'a to localized currency function created with no parameters';
      const operatorFunction = toLocalizedCurrency();
      when: 'applying the operator to number values';
      const value1 = 42;
      const value2 = 21;
      const $ = of(value1, value2).pipe(switchMap(operatorFunction));
      expect: 'the number values to have been translated to currency strings';
      expectObservable($).toBe('(ab|)', {
        a: `$${value1}.00`,
        b: `$${value2}.00`
      });
    })
  );

  it(
    'uses the latest currency to perform transformations',
    testScheduler(({ cold, expectObservable, hot }) => {
      given: 'a currency that changes over time';
      const currency1 = 'KMR';
      const currency2 = 'XYZ';
      const currency$ = hot('ab', {
        a: currency1,
        b: currency2
      });
      const locales$ = of(['en']);
      and: 'a to localized currency function using it';
      const operatorFunction = toLocalizedCurrency(undefined, currency$, locales$);
      given: '';
      const value1 = 42;
      const value2 = 21;
      const $ = cold('ab|', {
        a: value1,
        b: value2
      }).pipe(switchMap(operatorFunction));
      expectObservable($).toBe('ab|', {
        a: `${currency1}${space}${value1}.00`,
        b: `${currency2}${space}${value2}.00`
      });
    })
  );
});
