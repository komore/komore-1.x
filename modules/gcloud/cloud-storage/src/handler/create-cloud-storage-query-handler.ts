import { matchQuery } from '@komore/query';
import { map, mapTo, tapNext } from '@komore/reactive';

import { type CloudStorageQueryHandler } from './cloud-storage-query-handler';
import { type CloudStorageQueryHandlerOptions } from './cloud-storage-query-handler-options';
import { createCloudStoragePreSignedUrl } from './signed-url/create-cloud-storage-pre-signed-url';

/**
 * Creates a Cloud Storage query handler
 *
 * @param handlerOptions Cloud Storage query handler options
 * @returns Cloud Storage query handler
 */
export function createCloudStorageQueryHandler(
  handlerOptions: CloudStorageQueryHandlerOptions
): CloudStorageQueryHandler {
  const { storage } = handlerOptions;
  const createPreSignedUrl = createCloudStoragePreSignedUrl(storage);

  return query =>
    matchQuery(query, {
      createPreSignedUrl,
    });
}
