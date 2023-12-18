import { type Message } from '@google-cloud/pubsub';

import { commandProperties, createCommandType } from '@komore/command';

import { cloudPubSubDomain } from './cloud-pub-sub.domain';

/**
 * Cloud Pub/Sub command
 */
export const cloudPubSubCommand = createCommandType(cloudPubSubDomain, {
  /**
   * Publishes a message to the topic the Pub/Sub client is connected to
   */
  publishMessage: commandProperties<{ message: Message }>(),
});
