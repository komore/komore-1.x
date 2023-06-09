import { Client, SmithyResolvedConfiguration } from '@aws-sdk/smithy-client';
import { MetadataBearer } from '@aws-sdk/types';
import { MessageWithIntegrations } from '@komore/integration';
import { Message } from '@komore/message';
import { MessageWithAwsClient } from './message-with-aws-client';
import { MessageWithAwsIntegrations } from './message-with-aws-integrations';

/**
 * Mutates an AWS client in a message
 * @param awsClientType AWS client type
 * @param awsClient AWS client
 * @param awsClientIntegration AWS client integration
 * @returns Updated message
 * @template MessageTypeName Message type
 * @template MessageMetadataType Message properties type
 * @template MessageType Message type
 * @template IntegrationTypes Integration types
 * @template MessageWithIntegrationsType Message with integrations type
 * @template AwsIntegrationTypes AWS integration types
 * @template MessageWithAwsIntegrationsType Message with AWS integrations type
 * @template AwsClientTypeName AWS client type name
 * @template AwsClientHandlerOptions AWS client handler options
 * @template AwsClientInputType AWS client input type
 * @template AwsClientOutputType AWS client output type
 * @template AwsClientResolvedConfiguration AWS client resolved configuration
 * @template AwsClientType AWS client type
 * @template AwsClientIntegrationType AWS client integration type
 */
export function mutateAwsClient<
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
>(
  message: MessageWithAwsIntegrationsType,
  awsClientType: AwsClientTypeName,
  awsClient: Client<AwsClientHandlerOptions, AwsClientInputType, AwsClientOutputType, AwsClientResolvedConfiguration>
): MessageWithAwsClient<
  MessageTypeName,
  MessageMetadataType,
  MessageInputType,
  MessageOutputType,
  MessageType,
  IntegrationTypes,
  MessageWithIntegrationsType,
  AwsIntegrationTypes,
  MessageWithAwsIntegrationsType,
  AwsClientTypeName,
  AwsClientHandlerOptions,
  AwsClientInputType,
  AwsClientOutputType,
  AwsClientResolvedConfiguration
> {
  return {
    ...message,
    integration: {
      ...message.integrations,
      aws: {
        ...message.integrations.aws,
        [awsClientType]: awsClient
      }
    }
  };
}
