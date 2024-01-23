import { PubSub } from '@google-cloud/pubsub';

import { createClient } from '@komore/client';
import { ObservableMap } from '@komore/reactive';

import { cloudPubSubCommand } from '../cloud-pub-sub.command';
import { cloudPubSubError } from '../cloud-pub-sub.error';
import { cloudPubSubEvent } from '../cloud-pub-sub.event';
import { cloudPubSubQuery } from '../cloud-pub-sub.query';
import { cloudPubSubTopicNameToCloudPubSubCachedTopic } from '../cache/cloud-pub-sub-topic-name-to-cloud-pub-sub-cached-topic';
import { createCloudPubSubCommandHandler } from '../command/create-cloud-pub-sub-command-handler';
import { createCloudPubSubQueryHandler } from '../query/create-cloud-pub-sub-query-handler';
import { type CloudPubSubClient } from './cloud-pub-sub-client';
import { type CloudPubSubClientOptions } from './cloud-pub-sub-client-options';
import { cloudPubSubCommandEventMap } from './cloud-pub-sub-command-event-map';

/**
 * Creates a Cloud Pub/Sub client
 *
 * @param clientOptions Cloud Pub/Sub client options
 * @returns Cloud Pub/Sub client
 */
export function createCloudPubSubClient(clientOptions: CloudPubSubClientOptions): CloudPubSubClient {
  const { pubSub } = clientOptions;
  const cachedTopics = new ObservableMap(cloudPubSubTopicNameToCloudPubSubCachedTopic(pubSub));
  return createClient({
    command: cloudPubSubCommand,
    commandEventMap: cloudPubSubCommandEventMap,
    commandHandler: toEvents => createCloudPubSubCommandHandler({ cachedTopics, pubSub, toEvents }),
    error: cloudPubSubError,
    event: cloudPubSubEvent,
    query: cloudPubSubQuery,
    queryHandler: () => createCloudPubSubQueryHandler({ cachedTopics, pubSub }),
  });
}
