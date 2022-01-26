import { type recordLogEvent } from '@komore/observability/logging';

/**
 * Processor reporter
 */
export type ProcessorReporter = typeof recordLogEvent;
