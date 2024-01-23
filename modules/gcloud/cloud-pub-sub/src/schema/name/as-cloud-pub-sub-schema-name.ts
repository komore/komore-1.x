import { type CloudPubSubSchemaName } from './cloud-pub-sub-schema-name';
import { validateCloudPubSubSchemaName } from './validate-cloud-pub-sub-schema-name';

/**
 * Safely casts a string to a Cloud Pub/Sub schema name
 *
 * @param schemaName Schema name string
 * @returns Cloud Pub/Sub schema name
 */
export function asCloudPubSubSchemaName(schemaName: string): CloudPubSubSchemaName {
  validateCloudPubSubSchemaName(schemaName);
  return schemaName;
}
