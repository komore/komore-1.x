import { execSync, type SpawnSyncReturns } from 'child_process';

/**
 * Executes the `cargo metadata` command
 * @returns Command result
 */
export function executeCargoMetadata(): string | undefined {
  try {
    return execSync('cargo metadata --format-version=1', {
      encoding: 'utf-8'
    });
  } catch (e) {
    if (isSpawnSyncResult(e) && e.status === 101) {
      // error: could not find `Cargo.toml` in `xyz` or any parent directory
      // error: manifest path `xyz` contains no package: The manifest is virtual, and the workspace has no members.
      return undefined;
    }

    console.error('cargo metadata command execution failed', e);
    throw e;
  }
}

/**
 * Tests whether an error holds the result of a spawnSync
 * @param error Error
 * @returns true if the the error holds the result of a spawnSync
 */
export function isSpawnSyncResult(error: unknown): error is SpawnSyncReturns<unknown> {
  const potentialSpawnSyncReturns = error as Partial<SpawnSyncReturns<unknown>>;
  return potentialSpawnSyncReturns.status !== undefined;
}
