import { setDefaultCurrency } from '@komore/element/l10n';
import { of } from '@komore/reactive';
import { createTestScheduler } from '@komore/reactive/testing';
import { localizeCurrency } from './localize-currency';

describe('Localize currency operator', () => {
  const testScheduler = createTestScheduler();
  const space = '\xa0';

  setDefaultCurrency('USD');

  it(
    'transforms emitted number values into currency strings',
    testScheduler(({ expectObservable }) => {
      given: 'a localize currency operator function created with no parameters';
      const operatorFunction = localizeCurrency();
      when: 'applying the operator to number values';
      const value1 = 42;
      const value2 = 21;
      const $ = of(value1, value2).pipe(operatorFunction);
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
      given: 'a localize currency operator function with a currency that changes over time';
      const currency1 = 'KMR';
      const currency2 = 'XYZ';
      const currency$ = hot('ab', {
        a: currency1,
        b: currency2
      });
      const operatorFunction = localizeCurrency(undefined, currency$);
      given: '';
      const value1 = 42;
      const value2 = 21;
      const $ = cold('ab|', {
        a: value1,
        b: value2
      }).pipe(operatorFunction);
      expectObservable($).toBe('ab|', {
        a: `${currency1}${space}${value1}.00`,
        b: `${currency2}${space}${value2}.00`
      });
    })
  );
});
