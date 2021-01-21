import type { Observable } from 'rxjs';
import { forkJoin, of } from 'rxjs';
import { processScriptElement } from './process-script-element';

/**
 * Processes script elements
 * @param scriptElements HTML script elements
 * @returns TODO
 */
export function processScriptElements(scriptElements: ReadonlyArray<HTMLScriptElement>): Observable<unknown> {
  const jobs = scriptElements.map(processScriptElement);
  // TODO: remove after rxjs 7 merge
  if (jobs.length === 0) {
    return of([]);
  }
  return forkJoin(jobs);
}
