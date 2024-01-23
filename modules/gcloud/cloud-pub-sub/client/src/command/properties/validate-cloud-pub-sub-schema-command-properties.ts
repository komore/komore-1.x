import { type CloudPubSubSchemaName } from '@komore/gcloud/cloud-pub-sub';

import { type CloudPubSubSchemaType } from '../../api/schema/cloud-pub-sub-schema-type';

/**
 * Validate Cloud Pub/Sub schema command properties
 */
export interface ValidateCloudPubSubSchemaCommandProperties {
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
