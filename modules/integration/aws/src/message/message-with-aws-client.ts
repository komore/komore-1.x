import { type Client, type SmithyResolvedConfiguration } from '@aws-sdk/smithy-client';
import { type MetadataBearer } from '@aws-sdk/types';
import { type MessageWithIntegrations } from '@komore/integration';
import { type Message } from '@komore/message';
import { type ReadonlyRecord } from '@komore/typescript';
import { type AwsIntegrations } from './aws-integrations';
import { type MessageWithAmazonIntegrations } from './message-with-amazon-integrations';

/**
 * Message with an AWS client
 *
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
  MessageMetadataType extends Record<string, unknown>,
  MessageInputType,
  MessageOutputType,
  MessageType extends Message<MessageTypeName, MessageMetadataType, MessageInputType, MessageOutputType>,
  IntegrationTypes extends Record<string, unknown>,
  MessageWithIntegrationsType extends MessageWithIntegrations<
    MessageTypeName,
    MessageMetadataType,
    MessageInputType,
    MessageOutputType,
    MessageType,
    IntegrationTypes
  >,
  AwsIntegrationTypes extends object,
  MessageWithAmazonIntegrationsType extends MessageWithAmazonIntegrations<
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
> = MessageWithAmazonIntegrationsType &
  {
    readonly integrations: AwsIntegrations<
      ReadonlyRecord<
        AwsClientTypeName,
        Client<AwsClientHandlerOptions, AwsClientInputType, AwsClientOutputType, AwsClientResolvedConfiguration>
      >
    >;
  };
