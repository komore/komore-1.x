import { type CloudPubSubSchemaName } from './cloud-pub-sub-schema-name';

/**
 * Tests whether a string is a valid Cloud Pub/Sub schema name
 *
 * @param schemaName Schema name
 * @returns true if the string is a valid Cloud Pub/Sub schema name
 */
export function isCloudPubSubSchemaName(schemaName: string): schemaName is CloudPubSubSchemaName {
  const { length } = schemaName;
  return 3 <= length && length <= 255;
}
