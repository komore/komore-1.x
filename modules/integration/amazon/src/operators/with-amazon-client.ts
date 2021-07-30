import type { Client, SmithyResolvedConfiguration } from '@aws-sdk/smithy-client';
import type { MetadataBearer } from '@aws-sdk/types';
import type { MessageWithIntegrations } from '@komore/integration';
import type { Message } from '@komore/message';
import type { OperatorFunction } from '@komore/reactive';
import { map } from '@komore/reactive/operators';
import type { MessageWithAmazonClient } from '../graph/message-with-amazon-client';
import type { MessageWithAmazonIntegrations } from '../graph/message-with-amazon-integrations';
import { mutateAmazonClient } from '../graph/mutate-amazon-client';

/**
 * Attaches an AWS client to emitted messages
 * @param amazonClientType AWS client type
 * @param amazonClient AWS client
 * @param awsClientIntegration AWS client integration
 * @returns Operator function that attaches an AWS client to emitted messages
 * @template MessageTypeName Message type
 * @template MessageProperties Message properties type
 * @template MessageType Message type
 * @template IntegrationTypes Integration types
 * @template MessageWithIntegrationsType Message with integrations type
 * @template AmazonIntegrationTypes Amazon integration types
 * @template MessageWithAmazonIntegrationsType Message with Amazon integrations type
 * @template AmazonClientTypeName Amazon client type name
 * @template AmazonClientHandlerOptions Amazon client handler options
 * @template AmazonClientInputType Amazon client input type
 * @template AmazonClientOutputType Amazon client output type
 * @template AmazonClientResolvedConfiguration Amazon client resolved configuration
 * @template AwsClientType Amazon client type
 * @template AwsClientIntegrationType Amazon client integration type
 */
export function withAmazonClient<
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
  MessageWithAwsIntegrationsType extends MessageWithAmazonIntegrations<
    MessageTypeName,
    MessageMetadataType,
    MessageInputType,
    MessageOutputType,
    MessageType,
    IntegrationTypes,
    MessageWithIntegrationsType,
    AwsIntegrationTypes
  >,
  AmazonClientTypeName extends string,
  AmazonClientHandlerOptions,
  AmazonClientInputType extends object,
  AmazonClientOutputType extends MetadataBearer,
  AmazonClientResolvedConfiguration extends SmithyResolvedConfiguration<AmazonClientHandlerOptions>
>(
  amazonClientType: AmazonClientTypeName,
  amazonClient: Client<AmazonClientHandlerOptions, AmazonClientInputType, AmazonClientOutputType, AmazonClientResolvedConfiguration>
): OperatorFunction<
  MessageWithAmazonIntegrationsType,
  MessageWithAmazonClient<
    MessageTypeName,
    MessageMetadataType,
    MessageInputType,
    MessageOutputType,
    MessageType,
    IntegrationTypes,
    MessageWithIntegrationsType,
    AwsIntegrationTypes,
    MessageWithAwsIntegrationsType,
    AmazonClientTypeName,
    AmazonClientHandlerOptions,
    AmazonClientInputType,
    AmazonClientOutputType,
    AmazonClientResolvedConfiguration
  >
> {
  return map(message => mutateAmazonClient(message, amazonClientType, amazonClient));
}
