import type { Observable } from 'rxjs';
import { createProcessor } from '../create-processor';
import { scriptProcessorFactories } from './script-processor-factories';

/**
 * Processes a script element
 * @param scriptElement HTML script element
 * @returns Processed script element
 */
export function processScriptElement(scriptElement: HTMLScriptElement): Observable<unknown> {
  const type = scriptElement.getAttribute('type') ?? 'text/typescript';
  const content = scriptElement.innerText;
  // const media = styleElement.getAttribute('media') ?? 'all';
  const scriptProcessor = createProcessor(scriptProcessorFactories, type, {});
  return scriptProcessor(content);
}
