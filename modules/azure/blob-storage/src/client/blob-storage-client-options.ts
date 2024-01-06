import { type TokenCredential } from '@azure/core-auth';
import { StoragePipelineOptions, type AnonymousCredential, type StorageSharedKeyCredential } from '@azure/storage-blob';

import { type HttpClient } from '@komore/http/client';

/**
 * Blob Storage client options
 */
export interface BlobStorageClientOptions {
  /**
   * Credential
   */
  readonly credential: AnonymousCredential | StorageSharedKeyCredential | TokenCredential;
  /**
   * Endpoint URL
   */
  readonly endpointUrl: URL;
  /**
   * HTTP client
   */
  readonly httpClient: HttpClient;
  /**
   * Pipeline options
   */
  readonly pipelineOptions?: Omit<StoragePipelineOptions, 'httpClient'>;
}
