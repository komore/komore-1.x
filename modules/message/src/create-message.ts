import type { Message } from './message';

export function createMessage<MessageTypeName extends string>(
  type: MessageTypeName
): Message<MessageTypeName, {}, undefined, undefined>;

export function createMessage<MessageTypeName extends string, MessageMetadataType extends object>(
  type: MessageTypeName,
  metadata: MessageMetadataType
): Message<MessageTypeName, MessageMetadataType, undefined, undefined>;

export function createMessage<
  MessageTypeName extends string,
  MessageMetadataType extends object,
  MessageInputType,
  MessageOutputType
>(
  type: MessageTypeName,
  metadata: MessageMetadataType,
  input?: MessageInputType,
  output?: MessageOutputType
): Message<MessageTypeName, MessageMetadataType, MessageInputType, MessageOutputType>;

/**
 * Creates a message
 * @param type Message type
 * @param metadata Message metadata
 * @param input Message input
 * @param output Message output
 * @returns Message
 * @template MessageTypeName Message type name
 * @template MessageMetadataTypes Message metadata type
 * @template MessageInputType Message input type
 * @template MessageOutputType Message output type
 */
export function createMessage<
  MessageTypeName extends string,
  MessageMetadataType extends object = {},
  MessageInputType = undefined,
  MessageOutputType = undefined
>(
  type: MessageTypeName,
  metadata?: MessageMetadataType,
  input?: MessageInputType,
  output?: MessageOutputType
): Message<MessageTypeName, MessageMetadataType, MessageInputType, MessageOutputType> {
  return Object.freeze({
    type,
    metadata: (metadata ?? {}) as MessageMetadataType,
    input: input as MessageInputType,
    output: output as MessageOutputType
  });
}
