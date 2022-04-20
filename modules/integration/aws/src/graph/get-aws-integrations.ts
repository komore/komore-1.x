import { getIntegrations, type MessageWithIntegrations } from '@komore/integration';
import { type Message } from '@komore/message';
import { type MessageWithAmazonIntegrations } from '../message/message-with-amazon-integrations';

/**
 * Gets the AWS integrations from a message
 *
 * @param message Message
 * @param clientType Client type
 * @returns Amazon integrations
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
  message: MessageWithAmazonIntegrations<
    MessageTypeName,
    MessageMetadataType,
    MessageInputType,
    MessageOutputType,
    MessageType,
    IntegrationTypes,
    MessageWithIntegrationsType,
    AwsIntegrationTypes
  >
) => getIntegrations(message).amazon;
