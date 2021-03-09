import type { Client, SmithyResolvedConfiguration } from '@aws-sdk/smithy-client';
import { MetadataBearer } from '@aws-sdk/types';
import { MessageWithIntegrations } from '@komore/integration';
import { Message } from '@komore/message';
import { OperatorFunction, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { MessageWithAwsClient } from '../graph/message-with-aws-client';
import { MessageWithAwsIntegrations } from '../graph/message-with-aws-integrations';
import { mutateAwsClient } from '../graph/mutate-aws-client';

/**
 * Attaches an AWS client to emitted messages
 * @param awsClientType AWS client type
 * @param awsClient AWS client
 * @param awsClientIntegration AWS client integration
 * @returns Operator function that attaches an AWS client to emitted messages
 * @template MessageTypeName Message type
 * @template MessageProperties Message properties type
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
export function withAwsClient<
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
  awsClientType: AwsClientTypeName,
  awsClient: Client<AwsClientHandlerOptions, AwsClientInputType, AwsClientOutputType, AwsClientResolvedConfiguration>
): OperatorFunction<
  MessageWithAwsIntegrationsType,
  MessageWithAwsClient<
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
> {
  return pipe(map(message => mutateAwsClient(message, awsClientType, awsClient)));
}
