import { type ProcessedStyleSheet } from '@komore/element/compiler/processor';
import { defaultIfEmpty, forkJoin, type Observable } from '@komore/reactive';
import { processStyleElement } from './process-style-element';

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
