import { Logging } from '@google-cloud/logging';

/**
 * Adds a Cloud Logging client to a message
 * @param cloudLoggingClient Cloud Logging client
 * @returns Operator function that turns a message into a message with a Cloud Logging client
 */
export function withCloudLoggingClient(cloudLoggingClient?: Logging) {
  cloudLoggingClient ??= new Logging();
}
