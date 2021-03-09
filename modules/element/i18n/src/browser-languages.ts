import type { Observable } from '@komore/reactive';
import { defer, of } from '@komore/reactive';
import { cache } from '@komore/reactive/operators';
import type { Languages } from './languages';

/**
 * Browser languages
 */
export const BROWSER_LANGUAGES: Observable<Languages> = defer(() => of(navigator.languages)).pipe(cache());
