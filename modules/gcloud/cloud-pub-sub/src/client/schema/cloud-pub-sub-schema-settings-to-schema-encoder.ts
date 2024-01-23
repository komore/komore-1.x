import { type protos } from '@google-cloud/pubsub';

import { parseAvroSchema } from '@komore/avro';
import { of } from '@komore/reactive';

import { type CloudPubSubTopicCache } from '../../handler/cloud-pub-sub-topic-cache';

/**
 * Returns a schema encoder, given Cloud Pub/Sub schema settings
 *
 * @param schemaSettings Cloud Pub/Sub schema settings
 * @returns Schema encoder
 */
export function cloudPubSubSchemaSettingsToSchemaEncoder(
  schemaSettings: protos.google.pubsub.v1.ISchemaSettings | undefined
): CloudPubSubTopicCache['encoder'] {
  const schema = schemaSettings?.schema;
  if (typeof schema !== 'string') {
    return;
  }

  const avroSchema = parseAvroSchema(schema);

  return value => of(avroSchema.valueToBuffer(value));
}
