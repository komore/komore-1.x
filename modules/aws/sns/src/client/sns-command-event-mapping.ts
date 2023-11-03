import { type CommandName } from '@komore/command';
import { type EventName } from '@komore/event';
import { type ReadonlyRecord } from '@komore/typescript';

import { type snsCommand } from '../sns.command';
import { type snsEvent } from '../sns.event';

/**
 * SNS command to event mapping
 */
export const snsCommandEventMapping = {
  publish: 'messagePublished',
  publishBatch: 'messageBatchPublished',
} as const satisfies ReadonlyRecord<CommandName<typeof snsCommand>, EventName<typeof snsEvent>>;
