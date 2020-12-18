import { Client, SmithyResolvedConfiguration } from '@aws-sdk/smithy-client';
import { MetadataBearer } from '@aws-sdk/types';
import { MessageWithIntegrations } from '@komore/integration';
import { Message } from '@komore/message';
import { AwsIntegrations } from './aws-integrations';
import { MessageWithAwsIntegrations } from './message-with-aws-integrations';

/**
 * Message with an AWS client
 * @template MessageTypeName Message type name
 * @template MessageMetadataType Message metadata type
 * @template MessageInputType Message input type
 * @template MessageOutputType Message output type
 * @template MessageType Message type
 * @template IntegrationTypes Integration types
 * @template MessageWithIntegrationsType Message with integrations type
 * @template AwsIntegrationTypes AWS integration types
 * @template MessageWithAwsIntegrationsType Message with AWS integrations type
 */
export type MessageWithAwsClient<
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
  AwsIntegrationTypes extends object,
  MessageWithAwsIntegrationsType extends MessageWithAwsIntegrations<
    MessageTypeName,
    MessageMetadataType,
    MessageInputType,
    MessageOutputType,
    MessageType,
    IntegrationTypes,
    MessageWithIntegrationsType,
    AwsIntegrationTypes
  >,
  AwsClientTypeName extends string,
  AwsClientHandlerOptions,
  AwsClientInputType extends object,
  AwsClientOutputType extends MetadataBearer,
  AwsClientResolvedConfiguration extends SmithyResolvedConfiguration<AwsClientHandlerOptions>
> = MessageWithAwsIntegrationsType &
  Readonly<{
    integrations: AwsIntegrations<
      Record<
        AwsClientTypeName,
        Client<AwsClientHandlerOptions, AwsClientInputType, AwsClientOutputType, AwsClientResolvedConfiguration>
      >
    >;
  }>;
