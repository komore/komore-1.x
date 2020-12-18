import { hasMessageMetadata, Message } from '@komore/message';
import { AzureMetadata } from './azure-metadata';

/**
 * Tests whether Azure metadata is present
 * @param message Message
 * @returns true if the message contains Azure metadata
 */
export const hasAzureMetadata = (message: Message<any, any, any, any>) =>
  hasMessageMetadata<'azure', AzureMetadata>(message, 'azure');
