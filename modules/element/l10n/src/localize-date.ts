import { type DateLocalizationOptions, type Locales } from '@komore/web/l10n';
import { asObservableLocales } from './as-observable-locales';
import { map, type Observable, type OperatorFunction, pipe, withLatestFrom } from '@komore/reactive';

/**
 * Localizes a date
 * @param options Date localization options
 * @param locales List or observable list of locales
 * @returns Operator 
 */
export function localizeDate(
  options?: DateLocalizationOptions,
  locales?: Observable<Locales> | Locales
): OperatorFunction<Date, string> {
  const dateFormatOptions: Intl.DateTimeFormatOptions = {
    ...options?.format
  };
  const dateFormat$ = asObservableLocales(locales).pipe(
    map(locales => new Intl.DateTimeFormat([...locales], dateFormatOptions))
  );

  return pipe(
    withLatestFrom(dateFormat$),
    map(([value, dateFormat]) => dateFormat.format(value))
  );
}
