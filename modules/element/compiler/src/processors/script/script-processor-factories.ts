import { createTypeScriptProcessor } from './ts/create-typescript-processor';
import { type ScriptProcessorFactory } from './script-processor-factory';

/**
 * Script processor factories
 */
export const scriptProcessorFactories: ReadonlyArray<ScriptProcessorFactory> = [
  {
    regExp: /^text\/typescript$/,
    createProcessor: createTypeScriptProcessor
  }
];
