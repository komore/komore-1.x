/**
 * IndexedDB appender options
 */
export interface IndexedDBAppenderOptions {
  /**
   * IndexedDB database name
   */
  readonly databaseName: string;
  /**
   * IndexedDB store name
   */
  readonly storeName: string;
}
