import type { Observable } from '@komore/reactive';
import { ReplaySubject } from '@komore/reactive';
import { cache } from '@komore/reactive/operators';
import type { Locales } from '@komore/web/l10n';

/**
 * Default locales subject
 */
const defaultLocales$ = new ReplaySubject<Locales>(1);

/**
 * Default currency
 */
export const DEFAULT_LOCALES: Observable<Locales> = defaultLocales$.asObservable().pipe(cache());

/**
 * Sets the default locales
 * @param locales Locales
 */
export function setDefaultLocales(locales: Locales): void {
  defaultLocales$.next(locales);
}
