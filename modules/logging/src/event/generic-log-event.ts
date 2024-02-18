import { type Domain } from '@komore/domain';

import { type LogEvent } from './log-event';

/**
 * Generic log event
 */
export type GenericLogEvent = LogEvent<Domain, string, any>;
