import { type Message } from './message';

/**
 * Creates a message
 * @param type Message type
 * @returns Message
 * @template MessageTypeName Message type name
 */
export function createMessage<MessageTypeName extends string>(
  type: MessageTypeName
): Message<MessageTypeName, Record<symbol, never>, undefined, undefined>;

/**
 * Creates a message with metadata
 * @param type Message type
 * @param metadata Message metadata
 * @returns Message
 * @template MessageTypeName Message type name
 * @template MessageMetadataType Message metadata type
 */
export function createMessage<MessageTypeName extends string, MessageMetadataType extends Record<symbol, unknown>>(
  type: MessageTypeName,
  metadata: MessageMetadataType
): Message<MessageTypeName, MessageMetadataType, undefined, undefined>;

/**
 * Creates a message with metadata, an input and an output
 * @param type Message type
 * @param metadata Message metadata
 * @param input Input
 * @param output Output
 * @returns Message
 * @template MessageTypeName Message type name
 * @template MessageMetadataType Message metadata type
 * @template MessageInputType Message input type
 * @template MessageOutputType Message output type
 */
export function createMessage<
  MessageTypeName extends string,
  MessageMetadataType extends Record<symbol, unknown>,
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
  MessageMetadataType extends Record<symbol, unknown> = Record<symbol, never>,
  MessageInputType = undefined,
  MessageOutputType = undefined
>(
  type: MessageTypeName,
  metadata?: MessageMetadataType,
  input?: MessageInputType,
  output?: MessageOutputType
): Message<MessageTypeName, MessageMetadataType, MessageInputType, MessageOutputType> {
  return {
    type,
    metadata: (metadata ?? {}) as MessageMetadataType,
    input: input as MessageInputType,
    output: output as MessageOutputType
  };
}
