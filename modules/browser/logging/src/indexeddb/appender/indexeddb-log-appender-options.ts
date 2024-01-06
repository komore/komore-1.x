/**
 * IndexedDB log appender options
 */
export interface IndexedDbLogAppenderOptions {
  /**
   * IndexedDB database name
   */
  readonly databaseName: string;
  /**
   * IndexedDB store name
   */
  readonly storeName: string;
}
