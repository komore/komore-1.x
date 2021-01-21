import type { Observable } from 'rxjs';
import { forkJoin, of } from 'rxjs';
import { processStyleElement } from './process-style-element';

/**
 * Processes style elements
 * @param styleElements HTML style elements
 * @returns TODO
 */
export function processStyleElements(styleElements: ReadonlyArray<HTMLStyleElement>): Observable<unknown> {
  const jobs = styleElements.map(processStyleElement);
  // TODO: remove after rxjs 7 merge
  if (jobs.length === 0) {
    return of([]);
  }
  return forkJoin(jobs);
}
