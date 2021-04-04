import type { Observable } from '@komore/reactive';
import { ReplaySubject } from '@komore/reactive';
import { cache } from '@komore/reactive/operators';

/**
 * Default currency subject
 */
const defaultCurrency$ = new ReplaySubject<string>(1);

/**
 * Default currency
 */
export const DEFAULT_CURRENCY: Observable<string> = defaultCurrency$.asObservable().pipe(cache());

/**
 * Sets the default currency
 * @param currency Currency
 */
export function setDefaultCurrency(currency: string): void {
  defaultCurrency$.next(currency);
}
