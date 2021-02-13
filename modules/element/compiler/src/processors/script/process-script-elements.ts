import type { Observable } from 'rxjs';
import { forkJoin, of } from 'rxjs';
import { processScriptElement } from './process-script-element';
import type { ScriptProcessorOutput } from './script-processor-output';

/**
 * Processes script elements
 * @param scriptElements HTML script elements
 * @returns TODO
 */
export function processScriptElements(scriptElements: ReadonlyArray<HTMLScriptElement>): Observable<ReadonlyArray<ScriptProcessorOutput>> {
  const jobs = scriptElements.map(processScriptElement);
  return jobs.length === 0 ? of([]) : forkJoin(jobs);
}
