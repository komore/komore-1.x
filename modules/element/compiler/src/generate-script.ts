import type { HTMLElement } from 'node-html-parser';
import type { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';
import type { ScriptProcessor } from './processors/script-processor';
import { createTypeScriptProcessor } from './processors/typescript/create-typescript-processor';

/**
 * Script processor factory
 */
interface ScriptProcessorFactory {
  readonly regExp: RegExp;
  readonly factory: (options: unknown) => ScriptProcessor;
}

/**
 * Script processor factories
 */
const scriptProcessorFactories: ReadonlyArray<ScriptProcessorFactory> = [
  {
    regExp: /^text\/typescript$/,
    factory: createTypeScriptProcessor
  }
];

/**
 * Creates a script processor
 * @param type Type
 * @param options Options
 * @returns Script processor
 */
function createScriptProcessor(type: string, options: unknown): ScriptProcessor {
  const scriptProcessorFactory = scriptProcessorFactories.find(({ regExp }) => regExp.test(type));
  if (scriptProcessorFactory === undefined) {
    throw new Error(`no script processor found for type '${type}'`);
  }

  return scriptProcessorFactory.factory(options);
}

/**
 * Processes a script element
 * @param styleElement Style element
 * @returns Processed style element
 */
function processScriptElement(styleElement: HTMLElement): Observable<unknown> {
  const type = styleElement.getAttribute('type') ?? 'text/typescript';
  const content = styleElement.innerText;
  // const media = styleElement.getAttribute('media') ?? 'all';
  const scriptProcessor = createScriptProcessor(type, {});
  return scriptProcessor(content);
}

/**
 * Generates script
 * @param scriptElements Script elements
 * @returns TODO
 */
export function generateScript(scriptElements: ReadonlyArray<HTMLElement>): Observable<unknown> {
  const jobs = scriptElements.forEach(processScriptElement);
  return forkJoin(jobs);
}
