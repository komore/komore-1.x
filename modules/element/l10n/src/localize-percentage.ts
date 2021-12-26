import { map, type Observable, type OperatorFunction, pipe, withLatestFrom } from '@komore/reactive';
import { type Locales, type PercentageLocalizationOptions } from '@komore/web/l10n';
import { asObservableLocales } from './as-observable-locales';

/**
 * Localizes a percentage
 * @param options Percentage localization options
 * @param locales List or observable list of locales
 * @returns Operator function that transforms emitted number values into localized percentage strings
 */
export function localizePercentage(
  options?: PercentageLocalizationOptions,
  locales?: Observable<Locales> | Locales
): OperatorFunction<number, string> {
  const numberFormatOptions: Intl.NumberFormatOptions = {
    ...options,
    style: 'percent'
  };
  const numberFormat$ = asObservableLocales(locales).pipe(
    map(locales => new Intl.NumberFormat([...locales], numberFormatOptions))
  );

  return pipe(
    withLatestFrom(numberFormat$),
    map(([value, numberFormat]) => numberFormat.format(value))
  );
}
