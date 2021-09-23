import type { MessageWithIntegrations } from '@komore/integration';
import { mutateIntegrations } from '@komore/integration';
import type { Message } from '@komore/message';
import type {
  MessageWithAmazonIntegrations,
  MutatedAmazonIntegrationTypes
} from '../message/message-with-amazon-integrations';

/**
 * Mutates Amazon integrations
 * @param message Message
 * @returns Mutated Amazon integrations
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
export function mutateAmazonIntegrations<
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
  MessageWithAwsIntegrationsType extends MessageWithAmazonIntegrations<
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
): MutatedAmazonIntegrationTypes<MessageWithAwsIntegrationsType, AwsIntegrationTypesResult> {
  return mutateIntegrations(message, integrations => ({
    ...integrations,
    amazon: {
      ...integrations.amazon
    }
  }));
}
