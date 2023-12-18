import { PubSub } from '@google-cloud/pubsub';

import { createClient } from '@komore/client';

import { cloudPubSubCommand } from '../cloud-pub-sub.command';
import { cloudPubSubError } from '../cloud-pub-sub.error';
import { cloudPubSubEvent } from '../cloud-pub-sub.event';
import { cloudPubSubQuery } from '../cloud-pub-sub.query';
import { type CloudPubSubClient } from './cloud-pub-sub-client';
import { type CloudPubSubClientOptions } from './cloud-pub-sub-client-options';

/**
 * Creates a Cloud Pub/Sub client
 *
 * @param clientOptions Cloud Pub/Sub client options
 * @returns Cloud Pub/Sub client
 */
export function createCloudPubSubClient(clientOptions: CloudPubSubClientOptions): CloudPubSubClient {
  const { publishOptions, topicName, ...options } = clientOptions;
  const pubSub = new PubSub(options);
  const topic = pubSub.topic(topicName, publishOptions);
  return createClient({
    command: cloudPubSubCommand,
    commandEventMap: cloudPubSubCommandEventMap,
    commandHandler: events => createCloudPubSubCommandHandler({ events, pubSub, topic }),
    error: cloudPubSubError,
    event: cloudPubSubEvent,
    query: cloudPubSubQuery,
    queryHandler: () => createCLoudPubSubQueryHandler(),
  });
}
