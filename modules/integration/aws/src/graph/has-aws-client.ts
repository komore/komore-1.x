import { SmithyResolvedConfiguration } from '@aws-sdk/smithy-client';
import { MetadataBearer } from '@aws-sdk/types';
import { MessageWithIntegrations } from '@komore/integration';
import { Message } from '@komore/message';
import { getAwsIntegrations } from './get-aws-integrations';
import { MessageWithAwsClient } from './message-with-aws-client';
import { MessageWithAwsIntegrations } from './message-with-aws-integrations';

/**
 * Tests wether a specific AWS client is available within the message
 * @param message Message
 * @param clientType Client type
 * @returns true if the AWS client is available within the message
 * @template MessageTypeName Message type
 * @template MessageMetadataType Message metadata type
 * @template MessageType Message type
 * @template IntegrationTypes Integration types
 * @template MessageWithIntegrationsType Message with integration type
 * @template AwsIntegrationTypes AWS integration types
 * @template MessageWithAwsIntegrationsType Message with AWS integration type
 * @template AwsClientTypeName AWS client type name
 * @template AwsClientHandlerOptions AWS client handler options
 * @template AwsClientInputType AWS client input type
 * @template AwsClientOutputType AWS client output type
 * @template AwsClientResolvedConfiguration AWS client resolved configuration
 * @template AwsClientType AWS client type
 * @template AwsClientIntegrationType AWS client integration type
 */
export function getAwsClient<
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
  AwsClientResolvedConfiguration extends SmithyResolvedConfiguration<AwsClientHandlerOptions>,
  MessageWithAwsClientType extends MessageWithAwsClient<
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
  >
>(message: MessageWithAwsIntegrationsType, clientType: AwsClientTypeName): message is MessageWithAwsClientType {
  const awsIntegrations = getAwsIntegrations(message);
  return clientType in awsIntegrations;
}
