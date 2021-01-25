/**
 * Message
 * @template MessageTypeName Message type name
 * @template MessageMetadataType Message metadata type
 * @template MessageInputType Message input type
 * @template MessageOutputType Message output type
 */
export interface Message<
  MessageTypeName extends string,
  MessageMetadataType extends Record<symbol, any>,
  MessageInputType,
  MessageOutputType
> {
  readonly type: MessageTypeName;
  readonly metadata: MessageMetadataType;
  readonly input: MessageInputType;
  readonly output: MessageOutputType;
}
