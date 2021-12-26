import { type Observable } from '@komore/reactive';
import { type ScriptProcessorInput } from './script-processor-input';
import { type ScriptProcessorOutput } from './script-processor-output';

/**
 * Script processor
 */
export interface ScriptProcessor {
  /**
   * Processes a script
   * @param scriptProcessorInput$ Observable script processor input
   * @returns Observable script processor output
   */
  (scriptProcessorInput$: Observable<ScriptProcessorInput>): Observable<ScriptProcessorOutput>;
}
