import { BlobServiceClient } from '@azure/storage-blob';

import { httpClientToAzureCoreHttpClient } from '@komore/azure';
import { deferValue, type Observable } from '@komore/reactive';

import { type BlobStorageClientOptions } from './blob-storage-client-options';

export function createDeferredBlobServiceClient(
  clientOptions: BlobStorageClientOptions
): Observable<BlobServiceClient> {
  return deferValue(() => {
    const { credential, endpointUrl, pipelineOptions } = clientOptions;
    const httpClient = httpClientToAzureCoreHttpClient(clientOptions.httpClient);

    return new BlobServiceClient(endpointUrl.toString(), credential, {
      ...pipelineOptions,
      httpClient,
    });
  });
}
