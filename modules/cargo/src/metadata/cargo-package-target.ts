import { type RustEdition } from '@komore/rust';

import { type CargoCrateType } from './cargo-crate-type';
import { type CargoPackageTargetKind } from './cargo-package-target-kind';

/**
 * Cargo package target
 */
export interface CargoPackageTarget {
  /**
   * Crate types
   */
  readonly crate_types: ReadonlyArray<CargoCrateType>;
  /**
   * Default run
   */
  readonly default_run: string | null;
  /**
   * TODO
   */
  readonly doc: boolean;
  /**
   * TODO
   */
  readonly doctest: boolean;
  /**
   * Edition
   */
  readonly edition: RustEdition;
  /**
   * Native library being linked to
   */
  readonly links: string | null;
  /**
   * TODO
   */
  readonly test: boolean;
  /**
   * Target kind
   */
  readonly kind: ReadonlyArray<CargoPackageTargetKind>;
  /**
   * Name
   */
  readonly name: string;
  /**
   * Rust version
   */
  readonly rust_version: string | null;
  /**
   * Source path
   */
  readonly src_path: string;
}
