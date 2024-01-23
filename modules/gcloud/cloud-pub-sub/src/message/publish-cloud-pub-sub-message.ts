import { first, fromPromise, map, mergeMap, type Observable } from '@komore/reactive';

import { type CloudPubSubMessageId } from '../../../api/message/cloud-pub-sub-message-id';
import { type CloudPubSubTopicMap } from '../../cache/cloud-pub-sub-topic-map';
import { cloudPubSubMessagePropertiesToCloudPubSubMessage } from './cloud-pub-sub-message-properties-to-cloud-pub-sub-message';
import { asCloudPubSubMessageId } from './id/as-cloud-pub-sub-message-id';

/**
 * Creates a function that publishes a Cloud Pub/Sub message
 *
 * @param topic Cloud Pub/Sub topic
 * @returns Publish message Cloud Pub/Sub command-event handler
 */
export function publishCloudPubSubMessage(topics: CloudPubSubTopicMap): () => Observable<CloudPubSubMessageId> {
  return ({ topicName, ...messageProperties }) =>
    topics.get(topicName).pipe(
      first(),
      mergeMap(({ encoder, topic }) =>
        cloudPubSubMessagePropertiesToCloudPubSubMessage(encoder)(messageProperties).pipe(
          mergeMap(message => fromPromise(topic.publishMessage(message)))
        )
      ),
      map(asCloudPubSubMessageId)
    );
}
