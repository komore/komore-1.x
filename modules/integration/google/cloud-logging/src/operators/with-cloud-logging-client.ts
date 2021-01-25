import type { Logging } from '@google-cloud/logging';
import { withGoogleCloudClient } from '@komore/integration-google';
import { createCloudLoggingClient } from '../create-cloud-logging-client';

/**
 * Adds a Cloud Logging client to a message
 * @param cloudLoggingClient Cloud Logging client
 * @returns Operator function that turns a message into a message with a Cloud Logging client
 */
export const withCloudLoggingClient = (cloudLoggingClient?: Logging) =>
  withGoogleCloudClient('logging', cloudLoggingClient ?? createCloudLoggingClient())
;
