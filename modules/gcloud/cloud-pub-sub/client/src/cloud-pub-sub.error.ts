import { createErrorType, errorProperties } from '@komore/error';

import { cloudPubSubDomain } from '@komore/gcloud/cloud-pub-sub';

/**
 * Cloud Pub/Sub error
 */
export const cloudPubSubError = createErrorType(cloudPubSubDomain, {
  /**
   * Invalid schema definition
   *
   * @param schemaDefinition Schema definition
   */
  invalidSchemaDefinition: errorProperties<{ readonly schemaDefinition: string }>(),
});
