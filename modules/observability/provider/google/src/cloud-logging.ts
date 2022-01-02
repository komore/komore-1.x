import { createCloudLoggingClient, writeLogEntry } from '@komore/integration-google/cloud-logging';
import { type LoggingProvider } from '@komore/observability/provider';

export function cloudLogging(): LoggingProvider {
  const cloudLoggingClient = createCloudLoggingClient();
}
