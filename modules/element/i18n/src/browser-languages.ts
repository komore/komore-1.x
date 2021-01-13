import type { Observable } from 'rxjs';
import { defer, of } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import type { Languages } from './languages';

/**
 * Browser languages
 */
export const BROWSER_LANGUAGES: Observable<Languages> = defer(() => of(navigator.languages)).pipe(shareReplay());
