import { type StyleProcessorOutput } from '@komore/element-compiler/processor';
import { defaultIfEmpty, forkJoin } from '@komore/reactive';
import { processStyleElement } from './process-style-element';

/**
 * Processes style elements
 *
 * @param styleElements HTML style elements
 * @returns List of processed style sheets
 */
export function processStyleElements(
  styleElements: ReadonlyArray<HTMLStyleElement>
): Observable<ReadonlyArray<StyleProcessorOutput>> {
  const jobs = styleElements.map(processStyleElement);
  return forkJoin(jobs).pipe(defaultIfEmpty([]));
}
