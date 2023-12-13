import { type cargoCrateTypes } from './cargo-crate-types';

/**
 * Cargo crate type
 */
export type CargoCrateType = (typeof cargoCrateTypes)[number];
