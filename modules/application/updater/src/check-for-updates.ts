import { EMPTY, type Observable } from '@komore/reactive';

/**
 * Checks whether updates are available
 */
export function checkForUpdates(): Observable<never> {
  return EMPTY;
}

/*
 Usage:
  interval(xx).pipe(switchMapTo(checkForUpdate()));
  NOTE: timer would wait for the first occurence, while interval emits right away
*/
