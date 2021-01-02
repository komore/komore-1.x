import { defer, Observable, of } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { Languages } from './languages';

/**
 * Browser languages
 */
export const BROWSER_LANGUAGES: Observable<Languages> = defer(() => of(navigator.languages)).pipe(shareReplay());
