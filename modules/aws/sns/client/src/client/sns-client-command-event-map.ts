import { createClientCommandEventMap } from '@komore/client';

import { type snsCommand } from '../sns.command';
import { type snsEvent } from '../sns.event';

/**
 * SNS client command-to-event map
 */
export const snsClientCommandEventMap = createClientCommandEventMap<typeof snsCommand, typeof snsEvent>()({
  publish: 'messagePublished',
  publishBatch: 'messageBatchPublished',
});
