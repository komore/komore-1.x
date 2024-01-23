import { cloudPubSubTypeError } from '../../cloud-pub-sub-type.error';
import { type CloudPubSubSchemaName } from './cloud-pub-sub-schema-name';
import { isCloudPubSubSchemaName } from './is-cloud-pub-sub-schema-name';

/**
 * Validates that a string is a valid Cloud Pub/Sub schema name
 *
 * @param schemaName Schema name
 */
export function validateCloudPubSubSchemaName(schemaName: string): asserts schemaName is CloudPubSubSchemaName {
  if (!isCloudPubSubSchemaName(schemaName)) {
    throw cloudPubSubTypeError.invalidSchemaName({ schemaName });
  }
}
