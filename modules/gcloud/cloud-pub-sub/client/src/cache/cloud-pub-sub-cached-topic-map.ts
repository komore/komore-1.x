import { type CloudPubSubTopicName } from '@komore/gcloud/cloud-pub-sub';
import { type ObservableMap } from '@komore/reactive';

import { type CloudPubSubCachedTopic } from './cloud-pub-sub-cached-topic';

/**
 * Cloud Pub/Sub cached topic map
 */
export type CloudPubSubCachedTopicMap = ObservableMap<CloudPubSubTopicName, CloudPubSubCachedTopic>;
