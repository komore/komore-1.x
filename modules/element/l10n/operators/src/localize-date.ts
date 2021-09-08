import type { Locales } from '@komore/element/l10n';
import { asObservableLocales } from '@komore/element/l10n';
import type { Observable, OperatorFunction } from '@komore/reactive';
import { map, pipe, withLatestFrom } from '@komore/reactive/operators';
import type { DateLocalizationOptions } from './date-localization-options';

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
