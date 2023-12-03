import { type GenericDomain } from '@komore/domain';

import { type LogEvent } from './log-event';

/**
 * Generic log event
 */
export type GenericLogEvent = LogEvent<GenericDomain, string, any>;
