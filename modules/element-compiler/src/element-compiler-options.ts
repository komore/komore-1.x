import { type ElementCompilerOptimizationOptions } from './element-compiler-optimization-options';

/**
 * Element compiler options
 */
export interface ElementCompilerOptions {
  /**
   * Optimization options
   */
  readonly optimizations: ElementCompilerOptimizationOptions;
}
