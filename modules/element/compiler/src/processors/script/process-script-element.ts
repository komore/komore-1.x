import type { Observable } from '@komore/reactive';
import { of } from '@komore/reactive';
import { createProcessor } from '../create-processor';
import { scriptProcessorFactories } from './script-processor-factories';
import type { ScriptProcessorInput } from './script-processor-input';
import type { ScriptProcessorOutput } from './script-processor-output';

/**
 * Processes a script element
 * @param scriptElement HTML script element
 * @returns Processed script element
 */
export function processScriptElement(scriptElement: HTMLScriptElement): Observable<ScriptProcessorOutput> {
  const type = scriptElement.getAttribute('type') ?? 'text/typescript';
  const sourceFileName = 'todo-file-name.ts';
  const sourceContent = scriptElement.textContent ?? '';
  // const media = styleElement.getAttribute('media') ?? 'all';
  const scriptProcessor = createProcessor(scriptProcessorFactories, type, {});
  const scriptProcessorInput: ScriptProcessorInput = {
    sourceFileName,
    sourceContent
  };
  return scriptProcessor(of(scriptProcessorInput));
}
