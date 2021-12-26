import { noop } from '@komore/functional';
import { Observable } from '../observable';

/**
 * Observable that never emits an element and that never completes
 */
export const NEVER = new Observable<never>(noop);
