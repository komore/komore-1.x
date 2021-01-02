import { asObservableLanguages } from '@komore/element/i18n';
import { combineLatest, isObservable, Observable, of, OperatorFunction, pipe } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';
import { DEFAULT_CURRENCY } from '../default-currency';
import { Locales } from '../locales';

/**
 * Localizes a currency
 * @param options Number format options
 * @param currency Currency
 * @param languages Languages
 */
export function localizeCurrency(
  options?: Pick<Intl.NumberFormatOptions, 'currencyDisplay' | 'currencySign' | 'localeMatcher'>,
  currency?: Observable<string> | string,
  locales?: Observable<Locales> | Locales
): OperatorFunction<number, string> {
  const numberFormat$ = combineLatest({
    latestCurrency: currency === undefined ? DEFAULT_CURRENCY : isObservable(currency) ? currency : of(currency),
    latestLocales: asObservableLocales(locales)
  }).pipe(
    map(
      ({ latestCurrency, latestLocales }) =>
        new Intl.NumberFormat([...latestLocales], {
          ...options,
          style: 'currency',
          currency: latestCurrency
        })
    )
  );

  return pipe(
    withLatestFrom(numberFormat$),
    map(([value, numberFormat]) => numberFormat.format(value))
  );
}
