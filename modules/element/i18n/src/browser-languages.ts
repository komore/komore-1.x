import { cache, defer, type Observable, of } from '@komore/reactive';
import { type Languages } from './languages';

/**
 * Browser languages
 */
export const BROWSER_LANGUAGES: Observable<Languages> = defer(() => of(navigator.languages)).pipe(cache());
