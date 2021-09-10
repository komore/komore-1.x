import type { ElementCompilerError } from './element-compiler-error';

/**
 * Element compiler result
 */
export interface ElementCompilerResult {
  readonly errors: ReadonlyArray<ElementCompilerError>;
}
