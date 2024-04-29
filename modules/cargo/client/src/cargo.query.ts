import { cargoDomain, type CargoWorkspace } from '@komore/cargo';
import { createQueryType, queryProperties } from '@komore/query';

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
