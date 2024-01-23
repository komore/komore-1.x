import { type Storage } from '@google-cloud/storage';

/**
 * Cloud Storage query handler options
 */
export interface CloudStorageQueryHandlerOptions {
  /**
   * Cloud Storage
   */
  readonly storage: Storage;
}
