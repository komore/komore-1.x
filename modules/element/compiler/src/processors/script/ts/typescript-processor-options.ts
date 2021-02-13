import type { ScriptTarget } from 'typescript';
import type { ScriptProcessorOptions } from '../script-processor-options';

/**
 * TypeScript processor options
 */
export interface TypeScriptProcessorOptions extends ScriptProcessorOptions {
  readonly scriptTarget?: ScriptTarget;
}
