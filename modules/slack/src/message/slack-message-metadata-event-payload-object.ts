import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Slack message metadata event payload object
 */
export type SlackMessageMetadataEventPayloadObject = ReadonlyRecord<string, string | number | boolean>;
