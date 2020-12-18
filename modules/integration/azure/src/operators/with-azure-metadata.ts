import { mapMetadata } from '@komore/message';
import { hasAzureMetadata } from '../graph/has-azure-metadata';

/**
 * Operator function that adds Azure metadata to an emitted message
 */
export const withAzureMetadata = mapMetadata(message => ({
  ...message.metadata,
  azure: {
    ...(hasAzureMetadata(message) ? message.metadata.azure : undefined)
  }
}));
