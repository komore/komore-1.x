import { Logging, type LoggingOptions } from '@google-cloud/logging';

/**
 * Creates a Cloud Logging client
 * @param options Options
 * @returns Cloud Logging client
 */
export function createCloudLoggingClient(options: LoggingOptions): Logging {
  return new Logging(options);
}
