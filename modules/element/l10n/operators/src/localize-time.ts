import type { Locales } from '@komore/element/l10n';
import { asObservableLocales } from '@komore/element/l10n';
import type { Observable, OperatorFunction } from '@komore/reactive';
import { pipe } from '@komore/reactive';
import { map, withLatestFrom } from '@komore/reactive/operators';
import type { TimeLocalizationOptions } from './time-localization-options';

/**
 * Localizes time
 * @param options Time localization options
 * @param locales List or observable list of locales
 * @returns Operator function that transforms emitted date values into localized time strings
 */
export function localizeTime(
  options?: TimeLocalizationOptions,
  locales?: Observable<Locales> | Locales
): OperatorFunction<Date, string> {
  const dateTimeFormatOptions: Intl.DateTimeFormatOptions = {
    ...options?.format
  };
  const timeFormat$ = asObservableLocales(locales).pipe(
    map(locales => new Intl.DateTimeFormat([...locales], dateTimeFormatOptions))
  );

  return pipe(
    withLatestFrom(timeFormat$),
    map(([value, timeFormat]) => timeFormat.format(value))
  );
}
