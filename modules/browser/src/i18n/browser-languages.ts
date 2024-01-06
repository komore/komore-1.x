import { cache, deferValue, type Observable } from '@komore/reactive';

/**
 * Browser languages
 */
export const browserLanguages: Observable<ReadonlyArray<string>> = deferValue(() => navigator.languages).pipe(cache());
