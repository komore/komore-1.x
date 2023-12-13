import { type CargoDependency } from './cargo-dependency';
import { type CargoMetadata } from './cargo-metadata';
import { type CargoPackageTarget } from './cargo-package-target';
import { type RustEdition } from './rust-edition';

/**
 * Cargo package
 */
export interface CargoPackage {
  /**
   * Authors
   */
  readonly authors: ReadonlyArray<string>;
  /**
   * Categories
   */
  readonly categories: ReadonlyArray<string>;
  /**
   * Dependencies
   */
  readonly dependencies: ReadonlyArray<CargoDependency>;
  /**
   * Description
   */
  readonly description: string | null;
  /**
   * Documentation URL
   */
  readonly documentation: string | null;
  /**
   * Edition
   */
  readonly edition: RustEdition;
  /**
   * Features
   */
  readonly features: {
    /**
     * TODO
     */
    readonly _?: undefined;
  };
  /**
   * Homepage
   */
  readonly homepage: string | null;
  /**
   * Identifier
   */
  readonly id: string;
  /**
   * Keywords
   */
  readonly keywords: ReadonlyArray<string>;
  /**
   * License
   */
  readonly license: string | null;
  /**
   * License file
   */
  readonly license_file: string | null;
  /**
   * Manifest path
   */
  readonly manifest_path: string;
  /**
   * Metadata (TODO)
   */
  readonly metadata: CargoMetadata | null;
  /**
   * Name
   */
  readonly name: string;
  /**
   * Registry names
   */
  readonly publish: ReadonlyArray<string> | null;
  /**
   * README path
   */
  readonly readme: string | null;
  /**
   * Repository
   */
  readonly repository: string | null;
  /**
   * Source path
   */
  readonly source: string | null;
  /**
   * Targets
   */
  readonly targets: ReadonlyArray<CargoPackageTarget>;
  /**
   * Version
   */
  readonly version: string;
}
