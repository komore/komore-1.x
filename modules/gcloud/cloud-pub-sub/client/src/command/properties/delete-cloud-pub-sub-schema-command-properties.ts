import { type CloudPubSubSchemaName } from '@komore/gcloud/cloud-pub-sub';

/**
 * Delete Cloud Pub/Sub schema command properties
 */
export interface DeleteCloudPubSubSchemaCommandProperties {
  /**
   * Schema name
   */
  readonly schemaName: CloudPubSubSchemaName;
}
