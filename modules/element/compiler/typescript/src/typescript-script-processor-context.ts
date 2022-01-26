import { type SourceFile } from 'typescript';
import { type TypeScriptScriptProcessorContextTransformers } from './typescript-script-processor-context-transformers';
import { type TypeScriptScriptProcessorInput } from './typescript-script-processor-input';

/**
 * TypeScript script processor context
 */
export interface TypeScriptScriptProcessorContext extends TypeScriptScriptProcessorInput {
  readonly sourceFile: SourceFile;
  readonly transformers: TypeScriptScriptProcessorContextTransformers;
}
