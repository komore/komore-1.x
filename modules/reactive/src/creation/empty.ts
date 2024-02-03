/**
 * Observable that completes without emitting any element
 */
export const empty = new Observable<never>(subscriber => subscriber.complete());
