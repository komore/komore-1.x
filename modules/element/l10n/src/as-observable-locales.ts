import { isObservable, type Observable, of } from '@komore/reactive';
import { type Locales } from '@komore/web/l10n';
import { DEFAULT_LOCALES } from './default-locales';

/**
 * Builds an observable list of locales
 * @param locales Locales
 * @returns Observable list of locales
 */
export function asObservableLocales(locales: Observable<Locales> | Locales | undefined): Observable<Locales> {
  if (locales === undefined) {
    return DEFAULT_LOCALES;
  }

  if (isObservable(locales)) {
    return locales;
  }

  return of(locales);
}
