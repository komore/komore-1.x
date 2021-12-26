import { type IndexedDBUpgradeHandler } from './indexeddb-upgrade-handler';

/**
 * IndexedDB repository options
 */
export interface IndexedDBDatabaseOptions {
  readonly name: string;
  readonly version?: number;
  readonly upgradeHandler?: IndexedDBUpgradeHandler;
}
