import {
  getCloudPubSubSubscriptions,
  getCloudPubSubTopicMetadata,
  getCloudPubSubTopics,
} from '@komore/gcloud/cloud-pub-sub';
import { matchQuery } from '@komore/query';

import { type CloudPubSubQueryHandler } from './cloud-pub-sub-query-handler';
import { type CloudPubSubQueryHandlerOptions } from './cloud-pub-sub-query-handler-options';

/**
 * Creates a Cloud Pub/Sub query handler
 *
 * @param handlerOptions Cloud Pub/Sub query handler options
 * @returns Cloud Pub/Sub query handler
 */
export function createCloudPubSubQueryHandler(handlerOptions: CloudPubSubQueryHandlerOptions): CloudPubSubQueryHandler {
  const { cachedTopics: _, pubSub } = handlerOptions;
  const getSubscriptions = getCloudPubSubSubscriptions(pubSub);
  const getTopicMetadata = getCloudPubSubTopicMetadata(pubSub);
  const getTopics = getCloudPubSubTopics(pubSub);
  return query =>
    matchQuery(query, {
      getSubscriptions,
      getTopicMetadata,
      getTopics,
    });
}
