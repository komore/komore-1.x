import { commandProperties, createCommandType } from '@komore/command';
import { cloudPubSubDomain, type CloudPubSubTopicName } from '@komore/gcloud/cloud-pub-sub';
import { type ReadonlyRecord } from '@komore/typescript';

import { type CreateCloudPubSubSchemaCommandProperties } from './command/properties/create-cloud-pub-sub-schema-command-properties';
import { type CreateCloudPubSubTopicCommandProperties } from './command/properties/create-cloud-pub-sub-topic-command-properties';
import { type DeleteCloudPubSubSchemaCommandProperties } from './command/properties/delete-cloud-pub-sub-schema-command-properties';
import { type DeleteCloudPubSubTopicCommandProperties } from './command/properties/delete-cloud-pub-sub-topic-command-properties';
import { type ValidateCloudPubSubSchemaCommandProperties } from './command/properties/validate-cloud-pub-sub-schema-command-properties';

/**
 * Cloud Pub/Sub command
 */
export const cloudPubSubCommand = createCommandType(cloudPubSubDomain, {
  /**
   * Creates a schema
   *
   * @see {@link https://cloud.google.com/pubsub/docs/create-schemas#create-schema Create a schema}
   */
  createSchema: commandProperties<CreateCloudPubSubSchemaCommandProperties>(),
  /**
   * Creates a topic
   *
   * @see {@link TODO}
   */
  createTopic: commandProperties<CreateCloudPubSubTopicCommandProperties>(),
  /**
   * Deletes a schema
   *
   * @see {@link TODO}
   */
  deleteSchema: commandProperties<DeleteCloudPubSubSchemaCommandProperties>(),
  /**
   * Deletes a topic
   *
   * @see {@link TODO}
   */
  deleteTopic: commandProperties<DeleteCloudPubSubTopicCommandProperties>(),
  /**
   * Publishes a message
   *
   * @see {@link https://cloud.google.com/pubsub/docs/publisher#node.js Publish messages}
   */
  publishMessage: commandProperties<{
    /**
     * Message attributes
     */
    readonly attributes?: ReadonlyRecord<string, string>;
    /**
     * Message data
     *
     * If the data is a `Uint8Array` or a `string`, it is passed to Pub/Sub unmodified.
     *
     * If data has another type, the value is considered JSON and gets encoded, optionally using the schema defined for
     * the topic.
     */
    readonly data?: Uint8Array | string | unknown;
    /**
     * Ordering key
     */
    readonly orderingKey?: string;
    /**
     * Topic name
     */
    readonly topicName: CloudPubSubTopicName;
  }>(),
  /**
   * Validates a schema
   *
   * @see {@link TODO}
   */
  validateSchema: commandProperties<ValidateCloudPubSubSchemaCommandProperties>(),
});
