import { mapIntegrations, MessageWithIntegrations, mutateIntegrations } from '@komore/integration';
import { Message } from '@komore/message';
import { pipe } from 'rxjs';
import { MessageWithAwsIntegrations, MutatedAwsIntegrationTypes } from '../graph/message-with-aws-integrations';

/**
 * Maps AWS integrations
 * @param awsClientType AWS client type
 * @param awsClient AWS client
 * @param awsClientIntegration AWS client integration
 * @returns Updated message
 * @template MessageTypeName Message type
 * @template MessageMetadataType Message properties type
 * @template MessageInputType Message input type
 * @template MessageOutputType Message output type
 * @template MessageType Message type
 * @template IntegrationTypes Integration types
 * @template MessageWithIntegrationsType Message with integrations type
 * @template AwsIntegrationTypes AWS integration types
 * @template MessageWithAwsIntegrationsType Message with AWS integrations type
 */
export function mutateAwsIntegrations<
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
  AwsIntegrationTypesResult extends object,
  MessageWithAwsIntegrationsType extends MessageWithAwsIntegrations<
    MessageTypeName,
    MessageMetadataType,
    MessageInputType,
    MessageOutputType,
    MessageType,
    IntegrationTypes,
    MessageWithIntegrationsType,
    AwsIntegrationTypes
  >
>(
  message: MessageWithAwsIntegrationsType
): MutatedAwsIntegrationTypes<MessageWithAwsIntegrationsType, AwsIntegrationTypesResult> {
  return mutateIntegrations(message, integrations => ({
    ...integrations,
    aws: {
      ...integrations.aws
    }
  }));
}
