import type { StructuredDate } from '@komore/temporal/date';
import type { StructuredTime } from '@komore/temporal/time';

/**
 * Structured date time
 */
export interface StructuredDateTime extends StructuredDate, StructuredTime {}
