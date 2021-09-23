import type { Message } from '@komore/message';
import type { MessageWithIntegrations, MutatedIntegrationTypes } from './message-with-integrations';

/**
 * Mutates integrations
 * @param project Projection function
 * @template MessageTypeName Message type name
 * @template MessageMetadataType Message metadata type
 * @template MessageInputType Message input type
 * @template MessageOutputType Message output type
 * @template MessageType Message type
 * @template IntegrationTypes Integration types
 * @template IntegrationTypesResult Integration types after mapping
 */
export function mutateIntegrations<
  MessageTypeName extends string,
  MessageMetadataType extends object,
  MessageInputType,
  MessageOutputType,
  MessageType extends Message<MessageTypeName, MessageMetadataType, MessageInputType, MessageOutputType>,
  IntegrationTypes extends object,
  IntegrationTypesResult extends IntegrationTypes,
  MessageWithIntegrationsType extends MessageWithIntegrations<
    MessageTypeName,
    MessageMetadataType,
    MessageInputType,
    MessageOutputType,
    MessageType,
    IntegrationTypes
  >
>(
  message: MessageWithIntegrationsType,
  project: (integrations: IntegrationTypes) => IntegrationTypesResult
): MutatedIntegrationTypes<MessageWithIntegrationsType, IntegrationTypesResult> {
  return {
    ...message,
    integrations: project(message.integrations)
  };
}
