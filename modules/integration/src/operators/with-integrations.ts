import { Message } from '@komore/message';
import { OperatorFunction, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { isMessageWithIntegrations } from '../graph/is-message-with-integrations';
import { MessageWithIntegrations } from '../graph/message-with-integrations';

/**
 * Attaches integration information to emitted messages
 * @returns Unary function that attaches integration information to emitted messages
 * @template MessageTypeName Message type
 * @template MessageMetadataType Message metadata type
 * @template MessageInputType Message input type
 * @template MessageOutputType Message output type
 * @template MessageType Message type
 */
export function withIntegrations<
  MessageTypeName extends string,
  MessageMetadataType extends object,
  MessageInputType,
  MessageOutputType,
  MessageType extends Message<MessageTypeName, MessageMetadataType, MessageInputType, MessageOutputType>
>(): OperatorFunction<
  MessageType,
  MessageWithIntegrations<MessageTypeName, MessageMetadataType, MessageInputType, MessageOutputType, MessageType, {}>
> {
  return pipe(
    map(message => {
      if (isMessageWithIntegrations(message)) {
        return message;
      }

      return {
        ...message,
        integrations: {}
      };
    })
  );
}
