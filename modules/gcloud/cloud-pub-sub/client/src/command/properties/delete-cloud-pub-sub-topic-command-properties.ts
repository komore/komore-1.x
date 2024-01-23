import { type CloudPubSubTopicName } from '@komore/gcloud/cloud-pub-sub';

/**
 * Delete Cloud Pub/Sub topic command properties
 */
export interface DeleteCloudPubSubTopicCommandProperties {
  /**
   * Topic name
   */
  readonly topicName: CloudPubSubTopicName;
}
