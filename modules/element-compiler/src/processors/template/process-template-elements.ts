import { defaultIfEmpty, forkJoin } from '@komore/reactive';

import { processTemplateElement } from './process-template-element';

/**
 * Processes template elements
 *
 * @param htmlElements HTML elements
 * @returns TODO
 */
export function processTemplateElements(htmlElements: ReadonlyArray<HTMLElement>): Observable<unknown> {
  const jobs = htmlElements.map(processTemplateElement);
  return forkJoin(jobs).pipe(defaultIfEmpty([]));
}
