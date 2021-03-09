import type { Observable } from '@komore/reactive';
import { forkJoin } from '@komore/reactive';
import { defaultIfEmpty } from '@komore/reactive/operators';
import { processStyleElement } from './process-style-element';
import type { ProcessedStyleSheet } from './processed-style-sheet';

/**
 * Processes style elements
 * @param styleElements HTML style elements
 * @returns List of processed style sheets
 */
export function processStyleElements(
  styleElements: ReadonlyArray<HTMLStyleElement>
): Observable<ReadonlyArray<ProcessedStyleSheet>> {
  const jobs = styleElements.map(processStyleElement);
  return forkJoin(jobs).pipe(defaultIfEmpty([]));
}
