import { type MessageWithIntegrations } from '@komore/integration';
import { type Message } from '@komore/message';

/**
 * Message with Amazon integrations
 * @template MessageTypeName Message type name
 * @template MessageMetadataType Message metadata type
 * @template MessageInputType Message input type
 * @template MessageOutputType Message output type
 * @template MessageType Message type
 * @template IntegrationTypes Integration types
 * @template MessageWithIntegrationsType Message with integrations type
 * @template AmazonIntegrationTypes AWS integration types
 */
export type MessageWithAmazonIntegrations<
  MessageTypeName extends string,
  MessageMetadataType extends object,
  MessageInputType,
  MessageOutputType,
  MessageType extends Message<MessageTypeName, MessageMetadataType, MessageInputType, MessageOutputType>,
  IntegrationTypes extends object,
  MessageWithIntegrationsType extends MessageWithIntegrations<
    MessageTypeName,
    MessageMetadataType,
    MessageInputType,
    MessageOutputType,
    MessageType,
    IntegrationTypes
  >,
  AmazonIntegrationTypes extends object
> = MessageWithIntegrationsType &
  Readonly<{
    integrations: Readonly<{
      amazon: AmazonIntegrationTypes;
    }>;
  }>;

export type MutatedAmazonIntegrationTypes<
  MessageType,
  AmazonIntegrationTypes extends object
> = MessageType extends MessageWithAmazonIntegrations<
  infer MessageTypeName,
  infer MessageMetadataType,
  infer MessageInputType,
  infer MessageOutputType,
  infer MessageType,
  infer IntegrationTypes,
  infer MessageWithIntegrationsType,
  any
>
  ? MessageWithAmazonIntegrations<
      MessageTypeName,
      MessageMetadataType,
      MessageInputType,
      MessageOutputType,
      MessageType,
      IntegrationTypes,
      MessageWithIntegrationsType,
      AmazonIntegrationTypes
    >
  : never;
