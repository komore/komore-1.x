import type { Locales } from '@komore/element/l10n';
import { asObservableLocales } from '@komore/element/l10n';
import type { Observable, OperatorFunction } from '@komore/reactive';
import { pipe } from '@komore/reactive';
import { map, withLatestFrom } from '@komore/reactive/operators';
import type { DateTimeLocalizationOptions } from './date-time-localization-options';

/**
 * Localizes a date and time
 * @param options Date time localization options
 * @param locales Locales
 * @returns Operator function that transforms emitted date values into localized date time strings
 */
export function localizeDateTime(
  options?: DateTimeLocalizationOptions,
  locales?: Observable<Locales> | Locales
): OperatorFunction<Date, string> {
  const dateTimeFormatOptions: Intl.DateTimeFormatOptions = {
    ...options?.format
  };
  const dateTimeFormat$ = asObservableLocales(locales).pipe(
    map(locales => new Intl.DateTimeFormat([...locales], dateTimeFormatOptions))
  );

  return pipe(
    withLatestFrom(dateTimeFormat$),
    map(([value, dateTimeFormat]) => dateTimeFormat.format(value))
  );
}
