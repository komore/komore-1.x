import { type PubSub } from '@google-cloud/pubsub';

import { type CommandEventPairFromType } from '@komore/client';

import { type CloudPubSubCachedTopicMap } from '../cache/cloud-pub-sub-cached-topic-map';
import { type cloudPubSubCommand } from '../cloud-pub-sub.command';
import { type cloudPubSubEvent } from '../cloud-pub-sub.event';

/**
 * Cloud Pub/Sub command handler options
 */
export interface CloudPubSubCommandHandlerOptions {
  /**
   * Cached topics
   */
  readonly cachedTopics: CloudPubSubCachedTopicMap;
  /**
   * Pub/Sub client
   */
  readonly pubSub: PubSub;
  /**
   * Cloud Pub/Sub events recorder
   */
  readonly toEvents: (pair: CommandEventPairFromType<typeof cloudPubSubCommand, typeof cloudPubSubEvent>) => void;
}
