import type { BlobServiceClient } from '@azure/storage-blob';
import { withAzureClient } from '@komore/integration-azure';
import { createBlobClient } from '../create-blob-client';

/**
 * Adds a Blob client to a message
 * @param blobClient Blob client
 * @returns Operator function that turns a message into a message with a Blob client
 */
export const withBlobClient = (blobClient?: BlobServiceClient) =>
  withAzureClient('blob', blobClient ?? createBlobClient());
