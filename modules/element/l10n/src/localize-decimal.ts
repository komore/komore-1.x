import type { Locales } from '@komore/element/l10n';
import { asObservableLocales } from '@komore/element/l10n';
import type { Observable, OperatorFunction } from '@komore/reactive';
import { map, pipe, withLatestFrom } from '@komore/reactive/operators';
import type { DecimalLocalizationOptions } from './decimal-localization-options';

/**
 * Localizes a decimal
 * @param options Decimal localization options
 * @param locales List or observable list of locales
 * @returns Operator function that transforms emitted number values into localized decimal strings
 */
export function localizeDecimal(
  options?: DecimalLocalizationOptions,
  locales?: Observable<Locales> | Locales
): OperatorFunction<number, string> {
  const numberFormatOptions: Intl.NumberFormatOptions = {
    ...options,
    style: 'decimal'
  };
  const numberFormat$ = asObservableLocales(locales).pipe(
    map(locales => new Intl.NumberFormat([...locales], numberFormatOptions))
  );

  return pipe(
    withLatestFrom(numberFormat$),
    map(([value, numberFormat]) => numberFormat.format(value))
  );
}
