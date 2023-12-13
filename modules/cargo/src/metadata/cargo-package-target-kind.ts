import { type cargoPackageTargetKinds } from './cargo-package-target-kinds';

/**
 * Cargo package target kind
 */
export type CargoPackageTargetKind = (typeof cargoPackageTargetKinds)[number];
