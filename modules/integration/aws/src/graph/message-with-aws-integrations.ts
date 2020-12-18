import { MessageWithIntegrations } from '@komore/integration';
import { Message } from '@komore/message';
import { AwsIntegrations } from './aws-integrations';

/**
 * Message with AWS integrations
 * @template MessageTypeName Message type name
 * @template MessageMetadataType Message metadata type
 * @template MessageInputType Message input type
 * @template MessageOutputType Message output type
 * @template MessageType Message type
 * @template IntegrationTypes Integration types
 * @template MessageWithIntegrationsType Message with integrations type
 * @template AwsIntegrationTypes AWS integration types
 */
export type MessageWithAwsIntegrations<
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
  AwsIntegrationTypes extends object
> = MessageWithIntegrationsType &
  Readonly<{
    integrations: Readonly<{
      aws: AwsIntegrationTypes;
    }>;
  }>;

export type MutatedAwsIntegrationTypes<
  MessageType,
  AwsIntegrationTypes extends object
> = MessageType extends MessageWithAwsIntegrations<
  infer MessageTypeName,
  infer MessageMetadataType,
  infer MessageInputType,
  infer MessageOutputType,
  infer MessageType,
  infer IntegrationTypes,
  infer MessageWithIntegrationsType,
  any
>
  ? MessageWithAwsIntegrations<
      MessageTypeName,
      MessageMetadataType,
      MessageInputType,
      MessageOutputType,
      MessageType,
      IntegrationTypes,
      MessageWithIntegrationsType,
      AwsIntegrationTypes
    >
  : never;
