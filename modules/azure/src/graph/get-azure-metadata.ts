import { type Message } from '@komore/message';
import { type AzureMetadata } from './azure-metadata';

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
>(message: MessageType): AzureMetadataType {
  return message.metadata.azure;
}
