import type { Observable, OperatorFunction } from '@komore/reactive';
import { combineLatest, of } from '@komore/reactive';
import { map, pipe, withLatestFrom } from '@komore/reactive/operators';
import type { Locales } from '@komore/web/l10n';
import { asObservableLocales } from './as-observable-locales';
import { DEFAULT_CURRENCY } from './default-currency';
import type { CurrencyLocalizationOptions } from './options/currency-localization-options';

/**
 * Localizes a currency
 * @param options Currency localization options
 * @param currency Currency or observable currency
 * @param locales List or observable list of locales
 * @returns Operator function that transforms emitted number values into currency strings
 */
export function localizeCurrency(
  options?: CurrencyLocalizationOptions,
  currency?: Observable<string> | string,
  locales?: Observable<Locales> | Locales
): OperatorFunction<number, string> {
  const latestLocales = asObservableLocales(locales);
  const latestCurrency = buildLatestCurrency(options?.format, currency);
  const numberFormat$ = combineLatest({
    latestCurrency,
    latestLocales
  }).pipe(
    map(({ latestCurrency, latestLocales }) => ({
      locales: [...latestLocales],
      options: {
        ...options,
        style: 'currency',
        currency: latestCurrency
      }
    })),
    map(({ locales, options }) => new Intl.NumberFormat(locales, options))
  );

  return pipe(
    withLatestFrom(numberFormat$),
    map(([value, numberFormat]) => numberFormat.format(value))
  );
}

/**
 * Builds a latest currency observable based on the passed parameters
 * @param options Currency format options
 * @param currency Currency
 * @returns Observable that emits the latest currency value
 */
function buildLatestCurrency(
  options?: Pick<Intl.NumberFormatOptions, 'currency'>,
  currency?: Observable<string> | string
): Observable<string> {
  const chosenCurrency = currency ?? options?.currency;

  if (chosenCurrency !== undefined) {
    return typeof chosenCurrency === 'string' ? of(chosenCurrency) : chosenCurrency;
  }

  return DEFAULT_CURRENCY;
}
