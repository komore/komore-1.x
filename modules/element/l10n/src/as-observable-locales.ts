import { isObservable, of } from '@komore/reactive';
import { type Locales } from '@komore/web/l10n';

import { defaultLocales } from './default-locales';

/**
 * Builds an observable list of locales
 * @param locales Locales
 * @returns Observable list of locales
 */
export function asObservableLocales(locales: Observable<Locales> | Locales | undefined): Observable<Locales> {
  if (locales === undefined) {
    return defaultLocales;
  }

  if (isObservable(locales)) {
    return locales;
  }

  return of(locales);
}
