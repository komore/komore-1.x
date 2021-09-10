import type { Identifier, NodeFactory } from 'typescript';
import type { CompilerContextImportOptions } from './compiler-context-import-options';

/**
 * Compiler context
 */
export interface CompilerContext {
  /**
   * TypeScript node factory
   */
  readonly factory: NodeFactory;
  /**
   * Registers a necessary import and returns its identifier
   * @param options Import options
   * @returns Import identifier
   */
  readonly import: (options: CompilerContextImportOptions) => Identifier;
}
