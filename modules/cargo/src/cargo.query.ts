import { createQueryType, queryProperties } from '@komore/query';

import { cargoDomain } from './cargo.domain';
import { type CargoWorkspace } from './metadata/cargo-workspace';

/**
 * Cargo query
 */
export const cargoQuery = createQueryType(cargoDomain, {
  /**
   * Returns the Cargo workspace information
   *
   * @see {@link https://doc.rust-lang.org/cargo/commands/cargo-metadata.html cargo-metadata(1)}
   */
  getMetadata: queryProperties<CargoWorkspace>(),
});
