import type { MessageWithIntegrations } from '@komore/integration';
import { getIntegrations } from '@komore/integration';
import type { Message } from '@komore/message';
import type { MessageWithAmazonIntegrations } from '../message/message-with-amazon-integrations';

/**
 * Gets the Amazon integrations from a message
 * @param message Message
 * @param clientType Client type
 * @returns Amazon integrations
 */
export const getAmazonIntegrations = <
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
