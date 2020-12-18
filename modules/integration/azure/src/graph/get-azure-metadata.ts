import { Message } from '@komore/message';
import { AzureMetadata } from './azure-metadata';

/**
 * Gets Azure metadata from a message
 * @param message Message
 * @returns Azure metadata
 * @template AzureMetadataType Azure metadata type
 * @template MetadataType Metadata type
 * @template MessageType Message type
 */
export function getAzureMetadata<
  AzureMetadataType extends AzureMetadata,
  MetadataType extends Readonly<{ azure: AzureMetadataType }>,
  MessageType extends Message<any, MetadataType, any, any>
>(message: MessageType): AzureMetadata {
  return message.metadata.azure;
}
