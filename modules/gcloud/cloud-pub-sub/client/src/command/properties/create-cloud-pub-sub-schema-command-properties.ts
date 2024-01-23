import { type CloudPubSubSchemaName } from '@komore/gcloud/cloud-pub-sub';

import { type CloudPubSubSchemaType } from '../../api/schema/cloud-pub-sub-schema-type';

/**
 * Create Cloud Pub/Sub schema command properties
 */
export interface CreateCloudPubSubSchemaCommandProperties {
  /**
   * Schema definition
   */
  readonly schemaDefinition: string;
  /**
   * Schema name
   */
  readonly schemaName: CloudPubSubSchemaName;
  /**
   * Schema type
   */
  readonly schemaType?: CloudPubSubSchemaType;
}
