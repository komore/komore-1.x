import { type Identifier, type NodeFactory } from 'typescript';
import { type ElementCompilerContextImportOptions } from './element-compiler-context-import-options';
import { type ElementCompilerOptimizationOptions } from './element-compiler-optimization-options';

/**
 * Element compiler context
 */
export interface ElementCompilerContext {
  /**
   * TypeScript node factory
   */
  readonly factory: NodeFactory;
  /**
   * Optimization options
   */
  readonly optimizations: ElementCompilerOptimizationOptions;
  /**
   * Registers a necessary import and returns its identifier
   * @param options Import options
   * @returns Import identifier
   */
  readonly resolveImport: (options: ElementCompilerContextImportOptions) => Identifier;
}
