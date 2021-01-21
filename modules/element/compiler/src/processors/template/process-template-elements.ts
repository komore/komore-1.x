import type { Observable } from 'rxjs';
import { forkJoin, of } from 'rxjs';
import { processTemplateElement } from './process-template-element';

/**
 * Processes template elements
 * @param htmlElements HTML elements
 * @returns TODO
 */
export function processTemplateElements(htmlElements: ReadonlyArray<HTMLElement>): Observable<unknown> {
  const jobs = htmlElements.map(processTemplateElement);
  // TODO: remove after rxjs 7 merge
  if (jobs.length === 0) {
    return of([]);
  }
  return forkJoin(jobs);
}
