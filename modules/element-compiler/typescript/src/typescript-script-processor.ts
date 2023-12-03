import { type ScriptProcessor } from '@komore/element/compiler/processor';
import { type TypeScriptScriptProcessorInput } from './typescript-script-processor-input';
import { type TypeScriptScriptProcessorOutput } from './typescript-script-processor-output';

/**
 * TypeScript script processor
 */
export type TypeScriptScriptProcessor = ScriptProcessor<
  TypeScriptScriptProcessorInput,
  TypeScriptScriptProcessorOutput
>;
