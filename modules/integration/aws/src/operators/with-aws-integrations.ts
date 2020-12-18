import { MessageWithIntegrations } from '@komore/integration';
import { Message } from '@komore/message';
import { OperatorFunction, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { MessageWithAwsIntegrations } from './message-with-aws-integrations';

/**
 * Attaches AWS integrations to a message
 * @returns Unary function that attaches an AWS client to emitted messages
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
  MessageWithAwsIntegrations<
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
    map(message => mutateAwsIntegrations(message, aws => aws))
  );
}
