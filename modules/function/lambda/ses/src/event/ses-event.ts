import type { SesEventRecord } from './ses-event-record';

/**
 * SES event
 */
export interface SesEvent {
  readonly Records: ReadonlyArray<SesEventRecord>;
}
