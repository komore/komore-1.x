import { map } from 'rxjs/operators';
import { Message } from '../message';

/**
 * Operator function that sets a message's metadata
 * @param type Message type
 * @template MessageMetadataType Message metadata type
 * @template MessageType Message type
 */
export function mapMetadataTo<MessageMetadataType extends object>(metadata: MessageMetadataType) {
  return map(<MessageType extends Message<any, any, any, any>>(message: MessageType) => ({
    ...message,
    metadata
  }));
}
