/**
 * Message
 * @template MessageTypeName Message type name
 * @template MessageMetadataType Message metadata type
 * @template MessageInputType Message input type
 * @template MessageOutputType Message output type
 */
export type Message<
  MessageTypeName extends string,
  MessageMetadataType extends object,
  MessageInputType,
  MessageOutputType
> = Readonly<{
  type: MessageTypeName;
  metadata: MessageMetadataType;
  input: MessageInputType;
  output: MessageOutputType;
}>;

export type MessageTypeName<MessageType> = MessageType extends Message<infer MessageTypeName, any, any, any>
  ? MessageTypeName
  : never;
export type MessageMetadataType<MessageType> = MessageType extends Message<any, infer MessageMetadataType, any, any>
  ? MessageMetadataType
  : never;
export type MessageInputType<MessageType> = MessageType extends Message<any, any, infer MessageInputType, any>
  ? MessageInputType
  : never;
export type MessageOutputType<MessageType> = MessageType extends Message<any, any, any, infer MessageOutputType>
  ? MessageOutputType
  : never;

export type MutatedMessageTypeName<
  MessageType extends Message<any, any, any, any>,
  MessageTypeName extends string
> = Omit<MessageType, 'type'> & Readonly<{ type: MessageTypeName }>;
export type MutatedMessageMetadataType<
  MessageType extends Message<any, any, any, any>,
  MessageMetadataType extends object
> = Omit<MessageType, 'metadata'> & Readonly<{ metadata: MessageMetadataType }>;
export type MutatedMessageInputType<MessageType extends Message<any, any, any, any>, MessageInputType> = Omit<
  MessageType,
  'input'
> &
  Readonly<{ input: MessageInputType }>;
export type MutatedMessageOutputType<MessageType extends Message<any, any, any, any>, MessageOutputType> = Omit<
  MessageType,
  'output'
> &
  Readonly<{ output: MessageOutputType }>;
