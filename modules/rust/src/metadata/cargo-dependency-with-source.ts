import { type CargoDependency } from './cargo-dependency';

/**
 * Cargo dependency with source path
 */
export interface CargoDependencyWithSource extends CargoDependency {
  /**
   * Source path
   */
  readonly source: string;
}
