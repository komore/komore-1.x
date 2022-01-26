import { type ScriptProcessorFactory } from '@komore/element/compiler/processor';
import { type TypeScriptScriptProcessor } from './typescript-script-processor';
import { type TypeScriptScriptProcessorOptions } from './typescript-script-processor-options';

/**
 * TypeScript script processor factory
 */
export type TypeScriptScriptProcessorFactory = ScriptProcessorFactory<
  TypeScriptScriptProcessorOptions,
  TypeScriptScriptProcessor
>;
