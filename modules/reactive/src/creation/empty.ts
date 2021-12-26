import { Observable } from '../observable';

/**
 * Observable that completes without emitting any element
 */
export const EMPTY = new Observable<never>(subscriber => subscriber.complete());
