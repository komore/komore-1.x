import { type ReadonlyRecord } from '@komore/typescript';

import { type SlackMessageMetadataEventPayloadObject } from './slack-message-metadata-event-payload-object';

/**
 * Slack message metadata
 */
export interface SlackMessageMetadata {
  /**
   * Event payload
   */
  readonly event_payload: ReadonlyRecord<
    string,
    | string
    | number
    | boolean
    | SlackMessageMetadataEventPayloadObject
    | ReadonlyArray<SlackMessageMetadataEventPayloadObject>
  >;
  /**
   * Event type
   */
  readonly event_type: string;
}
