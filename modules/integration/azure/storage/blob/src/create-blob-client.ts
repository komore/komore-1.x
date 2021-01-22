import type { TokenCredential } from '@azure/core-auth';
import type { AnonymousCredential, StoragePipelineOptions, StorageSharedKeyCredential } from '@azure/storage-blob';
import { BlobServiceClient } from '@azure/storage-blob';

/**
 * Environment variables
 */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      KMR_INTEGRATION_AZURE_STORAGE_BLOB_APIKEY: string;
      KMR_INTEGRATION_AZURE_STORAGE_BLOB_ENDPOINT: string;
    }
  }
}

/**
 * Creates a Blob client
 * @param endpointUrl Endpoint URL
 * @param credential Credential
 * @param options Options
 * @returns Blob client
 */
export function createBlobClient(
  endpointUrl?: string,
  credential?: AnonymousCredential | StorageSharedKeyCredential | TokenCredential,
  options?: StoragePipelineOptions
): BlobServiceClient {
  return new BlobServiceClient(
    endpointUrl ?? process.env.KMR_INTEGRATION_AZURE_STORAGE_BLOB_ENDPOINT,
    credential,
    options
  );
}
