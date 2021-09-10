import type { Observable } from '@komore/reactive';
import type { ElementCompilerResult } from './element-compiler-result';

/**
 * Element compiler
 */
export interface ElementCompiler {
  /**
   * Compiles a source
   * @param source Source
   * @returns Element compiler result
   */
  (source: string): Observable<ElementCompilerResult>;
}
