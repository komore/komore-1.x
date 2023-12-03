import { type SnsEventRecord } from './sns-event-record';

/**
 * SNS event
 */
export interface SnsEvent {
  readonly Records: ReadonlyArray<SnsEventRecord>;
}
