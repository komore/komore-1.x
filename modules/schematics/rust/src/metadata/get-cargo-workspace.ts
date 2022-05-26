import { type CargoWorkspace } from './cargo-workspace';
import { executeCargoMetadata } from './execute-cargo-metadata';
import { parseCargoMetadata } from './parse-cargo-metadata';

/**
 * Gets the Cargo workspace
 * @returns Cargo workspace
 */
export function getCargoWorkspace(): CargoWorkspace | undefined {
  const metadataString = executeCargoMetadata();
  if (metadataString === undefined) {
    return undefined;
  }

  const workspace = parseCargoMetadata(metadataString);
  return workspace;
}
