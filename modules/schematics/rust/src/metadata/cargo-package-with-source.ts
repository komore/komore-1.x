import { type CargoPackage } from './cargo-package';

/**
 * Cargo package with a source path
 */
export interface CargoPackageWithSource extends CargoPackage {
  /**
   * Source path
   */
  readonly source: string;
}
