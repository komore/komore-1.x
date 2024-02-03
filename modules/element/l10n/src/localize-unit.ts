import { pipe } from '@komore/functional';
import { type Locales } from '@komore/web/l10n';
import { combineLatest, isObservable, map, of, withLatestFrom, type OperatorFunction } from '@komore/reactive';
// TODO: remove once available without custom definition
import { type UnitLocalizationOptions } from '@komore/web/l10n';

import { asObservableLocales } from './as-observable-locales';

/**
 * Localizes a unit
 *
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
    latestUnit,
  }).pipe(
    map(({ latestLocales, latestUnit }) => ({
      locales: [...latestLocales],
      options: {
        ...options,
        style: 'unit',
        unit: latestUnit,
      },
    })),
    map(({ locales, options }) => new Intl.NumberFormat(locales, options))
  );

  return pipe(
    withLatestFrom(numberFormat$),
    map(([value, numberFormat]) => numberFormat.format(value))
  );
}
