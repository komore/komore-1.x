import { map, type Observable, type OperatorFunction, pipe, withLatestFrom } from '@komore/reactive';
import { type Locales, type TimeLocalizationOptions } from '@komore/web/l10n';
import { asObservableLocales } from './as-observable-locales';

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
