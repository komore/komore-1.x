import { type CargoWorkspace } from './cargo-workspace';

/**
 * Parses a `cargo metadata` command output string
 *
 * @param metadataCommandOutput `metadata` command output string
 * @returns Cargo workspace
 */
export function parseCargoMetadata(metadataCommandOutput: string): CargoWorkspace {
  try {
    const metadata = JSON.parse(metadataCommandOutput) as CargoWorkspace;
    return metadata;
  } catch (e) {
    console.error('unable to parse cargo metadata command output', e);
    throw e;
  }
}
