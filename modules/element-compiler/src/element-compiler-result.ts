import { type SourceFile } from 'typescript';
import { type ElementCompilerError } from './element-compiler-error';

/**
 * Element compiler result
 */
export interface ElementCompilerResult {
  readonly declarationSource?: SourceFile;
  readonly errors: ReadonlyArray<ElementCompilerError>;
  readonly source?: SourceFile;
}
