import type { Observable } from '@komore/reactive';
import { isObservable, of } from '@komore/reactive';
import { DEFAULT_LOCALES } from './default-locales';
import type { Locales } from './locales';

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
