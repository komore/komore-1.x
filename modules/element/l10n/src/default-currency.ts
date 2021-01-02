import { Observable, Subject } from "rxjs";
import { shareReplay } from "rxjs/operators";

/**
 * Default currency subject
 */
const defaultCurrency$ = new Subject<string>();

/**
 * Default currency
 */
export const DEFAULT_CURRENCY: Observable<string> = defaultCurrency$.asObservable().pipe(
  shareReplay({ bufferSize: 1, refCount: false })
);

/**
 * Sets the default currency
 * @param currency Currency
 */
export function setDefaultCurrency(currency: string): void {
  defaultCurrency$.next(currency);
}
