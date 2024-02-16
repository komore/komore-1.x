import { noop } from '@komore/functional';

/**
 * Observable that does not emit any element and never completes
 */
export const never = new Observable<never>(noop);
