import { getIntegrations, MessageWithIntegrations } from '@komore/integration';
import { Message } from '@komore/message';
import { MessageWithAwsIntegrations } from './message-with-aws-integrations';

/**
 * Gets an AWS client integration from a message with AWS clients
 * @param message Message
 * @param clientType Client type
 * @returns Client integration
 */
export const getAwsIntegrations = <
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
>(
  message: MessageWithAwsIntegrations<
    MessageTypeName,
    MessageMetadataType,
    MessageInputType,
    MessageOutputType,
    MessageType,
    IntegrationTypes,
    MessageWithIntegrationsType,
    AwsIntegrationTypes
  >
) => getIntegrations(message).aws;
