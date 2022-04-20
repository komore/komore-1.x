import { type Logging } from '@google-cloud/logging';

/**
 * Cloud Logging client
 */
export interface CloudLoggingClient {
  /**
   * Client
   */
  readonly client: Logging;
}
