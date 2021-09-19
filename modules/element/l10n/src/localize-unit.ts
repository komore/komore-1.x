import type { Locales } from '@komore/element/l10n';
import { asObservableLocales } from '@komore/element/l10n';
import type { Observable, OperatorFunction } from '@komore/reactive';
import { combineLatest, isObservable, of } from '@komore/reactive';
import { map, pipe, withLatestFrom } from '@komore/reactive/operators';
import type { NumberFormatOptionsUnit } from './intl.typing';
import type { UnitLocalizationOptions } from './unit-localization-options';

/**
 * Localizes a unit
 * @param unit Unit or observable unit
 * @param options Unit localization options
 * @param locales List or observable list of locales
 * @returns Operator function that transforms emitted number values into localized unit strings
 */
export function localizeUnit(
  unit: NumberFormatOptionsUnit | Observable<NumberFormatOptionsUnit>,
  options?: UnitLocalizationOptions,
  locales?: Locales | Observable<Locales>
): OperatorFunction<number, string> {
  const latestLocales = asObservableLocales(locales);
  const latestUnit = isObservable(unit) ? unit : of(unit);
  const numberFormat$ = combineLatest({
    latestLocales,
    latestUnit
  }).pipe(
    map(({ latestLocales, latestUnit }) => ({
      locales: [...latestLocales],
      options: {
        ...options,
        style: 'unit',
        unit: latestUnit
      }
    })),
    map(({ locales, options }) => new Intl.NumberFormat(locales, options))
  );

  return pipe(
    withLatestFrom(numberFormat$),
    map(([value, numberFormat]) => numberFormat.format(value))
  );
}
