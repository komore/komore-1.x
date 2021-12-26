import { type SourceFile } from 'typescript';
import { type ElementCompilerError } from './element-compiler-error';

/**
 * Element compiler result
 */
export interface ElementCompilerResult {
  readonly source?: SourceFile;
  readonly errors: ReadonlyArray<ElementCompilerError>;
}
