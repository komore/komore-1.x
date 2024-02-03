import { defaultIfEmpty, forkJoin } from '@komore/reactive';
import { processScriptElement } from './process-script-element';
import { type ScriptProcessorOutput } from './script-processor-output';

/**
 * Processes script elements
 *
 * @param scriptElements HTML script elements
 * @returns TODO
 */
export function processScriptElements(
  scriptElements: ReadonlyArray<HTMLScriptElement>
): Observable<ReadonlyArray<ScriptProcessorOutput>> {
  const jobs = scriptElements.map(processScriptElement);
  return forkJoin(jobs).pipe(defaultIfEmpty([]));
}
