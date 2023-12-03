import { deferPromise, type Observable } from '@komore/reactive';

/**
 * Screen details
 */
export const screenDetails: Observable<ScreenDetails> = deferPromise(() => window.getScreenDetails());
