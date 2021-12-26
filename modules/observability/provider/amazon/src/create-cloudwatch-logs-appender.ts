import { putLogEvents } from '@komore/integration-amazon/cloudwatch-logs';
import { type Appender } from '@komore/observability/logging';
import { takeUntil } from '@komore/reactive';

export function createCloudWatchLogsAppender(): Appender {
  return {
    next: logEventRecord => {
      
    }
  }
  takeUntil()
  const 
}
