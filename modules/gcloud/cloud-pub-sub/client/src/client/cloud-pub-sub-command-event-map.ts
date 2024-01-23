import { createClientCommandEventMap } from '@komore/client';

import { type cloudPubSubCommand } from '../cloud-pub-sub.command';
import { type cloudPubSubEvent } from '../cloud-pub-sub.event';

/**
 * Cloud Pub/Sub command-to-event map
 */
export const cloudPubSubCommandEventMap = createClientCommandEventMap<
  typeof cloudPubSubCommand,
  typeof cloudPubSubEvent
>()({
  createTopic: 'topicCreated',
  deleteTopic: 'topicDeleted',
  publishMessage: 'messagePublished',
});
