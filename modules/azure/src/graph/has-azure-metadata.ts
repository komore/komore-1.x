import { hasMessageMetadata, Message } from '@komore/message';
import { AzureMetadata } from './azure-metadata';

/**
 * Tests whether Azure metadata is present
 * @param message Message
 * @returns true if the message contains Azure metadata
 */
export function hasAzureMetadata(message: Message<any, any, any, any>) {
  return hasMessageMetadata<'azure', AzureMetadata>(message, 'azure');
}
