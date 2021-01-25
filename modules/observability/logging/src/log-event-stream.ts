import type { LoggingDriver } from '@komore/observability/driver';
import { Subject } from 'rxjs';
import type { LogEvent } from './log-event';

export const logEventStream = new Subject<LogEvent<any, any, any, any>>();
