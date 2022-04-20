import { MessageWithIntegrations } from '@komore/integration';
import { Message } from '@komore/message';
import { map, type OperatorFunction, pipe } from '@komore/reactive';
import { MessageWithAmazonIntegrations } from './message-with-amazon-integrations';

/**
 * Attaches Amazon integrations to a message
 * @returns Unary function that attaches an Amazon client to emitted messages
 * @template MessageTypeName Message type
 * @template MessageProperties Message properties type
 * @template MessageType Message type
 * @template IntegrationTypes Integration types
 * @template MessageWithIntegrationType Message with integration type
 */
export function withAwsIntegrations<
  MessageTypeName extends string,
  MessageMetadataType extends object,
  MessageInputType,
  MessageOutputType,
  MessageType extends Message<MessageTypeName, MessageMetadataType, MessageInputType, MessageOutputType>,
  IntegrationTypes extends object,
  MessageWithIntegrationType extends MessageWithIntegrations<
    MessageTypeName,
    MessageMetadataType,
    MessageInputType,
    MessageOutputType,
    MessageType,
    IntegrationTypes
  >
>(): OperatorFunction<
  MessageWithIntegrationType,
  MessageWithAmazonIntegrations<
    MessageTypeName,
    MessageMetadataType,
    MessageInputType,
    MessageOutputType,
    MessageType,
    IntegrationTypes,
    MessageWithIntegrationType,
    {}
  >
> {
  return pipe(
    map(message => mutateAmazonIntegrations(message, amazon => amazon))
  );
}
