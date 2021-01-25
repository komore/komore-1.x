import { createCloudLoggingClient, writeLogEntry } from '@komore/integration-google/cloud-logging';
import type { LoggingDriver } from '@komore/observability/driver';

export function cloudLogging(): LoggingDriver {
  const cloudLoggingClient = createCloudLoggingClient();
}
