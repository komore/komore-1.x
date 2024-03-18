import { type IndexedDBUpgradeHandler } from './upgrade/indexeddb-upgrade-handler';

/**
 * IndexedDB database options
 */
export interface IndexedDBDatabaseOptions {
  /**
   * Database name
   */
  readonly name: string;
  /**
   * Database version
   */
  readonly version?: number;
  /**
   * Upgrade handler
   */
  readonly upgradeHandler?: IndexedDBUpgradeHandler;
}
