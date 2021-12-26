import * as logger from '@azure/logger';
import { type Appender } from '@komore/observability/logging';

// TODO: https://www.npmjs.com/package/@azure/logger

export function createAzureMonitorAppender(): Appender {
  const azureLogger = ;
  return {
    next(_logEventRecord) {
      logger.createClientLogger()
    }
  };
}
