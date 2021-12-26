import { map, type Observable, type OperatorFunction, pipe, withLatestFrom } from '@komore/reactive';
import { type DateTimeLocalizationOptions, type Locales } from '@komore/web/l10n';
import { asObservableLocales } from './as-observable-locales';

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
