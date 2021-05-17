import { putLogEvents } from '@komore/integration-amazon/cloudwatch-logs';
import type { Appender } from '@komore/observability/logging';
import { takeUntil } from 'rxjs/operators';

export function createCloudWatchLogsAppender(): Appender {
  takeUntil()
  const 
}
