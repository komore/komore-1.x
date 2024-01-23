import { TopicMetadata, type PageOptions } from '@google-cloud/pubsub';

import { createQueryType, queryProperties } from '@komore/query';

import { type CloudPubSubTopic } from './api/topic/cloud-pub-sub-topic';
import { type CloudPubSubTopicName } from './api/topic/name/cloud-pub-sub-topic-name';
import { cloudPubSubDomain } from './cloud-pub-sub.domain';

/**
 * Cloud Pub/Sub query
 */
export const cloudPubSubQuery = createQueryType(cloudPubSubDomain, {
  /**
   * Returns the list of schemas
   *
   * @returns List of schemas
   */
  getSchemas: queryProperties<unknown, unknown>()
  /**
   * Returns the list of subscriptions
   *
   * @returns List of subscriptions
   */
  getSubscriptions: queryProperties<
    unknown,
    {
      /**
       * Topic name
       */
      readonly topicName: CloudPubSubTopicName;
    }
  >(),
  /**
   * Returns a topic's metadata
   *
   * @returns Topic metadata
   */
  getTopicMetadata: queryProperties<
    TopicMetadata,
    {
      /**
       * Topic name
       */
      readonly topicName: CloudPubSubTopicName;
    }
  >(),
  /**
   * Returns the list of available topics
   */
  getTopics: queryProperties<
    {
      /**
       * Next page token
       */
      readonly nextPageToken: string;
      /**
       * List of topics
       */
      readonly topics: ReadonlyArray<CloudPubSubTopic>;
    },
    {
      /**
       * Pagination options
       */
      readonly pageOptions?: PageOptions;
    }
  >(),
});
