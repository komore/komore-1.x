import { type CloudPubSubTopicName } from '@komore/gcloud/cloud-pub-sub';

/**
 * Create Cloud Pub/Sub topic command properties
 */
export interface CreateCloudPubSubTopicCommandProperties {
  /**
   * Topic name
   */
  readonly topicName: CloudPubSubTopicName;
}
