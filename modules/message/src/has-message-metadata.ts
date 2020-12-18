import { Message, MutatedMessageMetadataType } from './message';

/**
 * Tests whether a specific type of metadata is present
 * @param message Message
 * @param metadataKeyName Metadata key name
 * @returns true if the specific type of metadata is present
 * @template MetadataKeyName Metadata key name
 * @template MetadataTypeName Metadata type name
 */
export function hasMessageMetadata<MetadataKeyName extends string, MetadataTypeName>(
  message: Message<any, any, any, any>,
  metadataKeyName: MetadataKeyName
): message is MutatedMessageMetadataType<typeof message, Readonly<{ MetadataKeyName: MetadataTypeName }>> {
  return metadataKeyName in message;
}
