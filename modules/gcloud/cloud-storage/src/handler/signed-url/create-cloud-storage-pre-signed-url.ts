import { type Storage } from '@google-cloud/storage';

import { deferPromise, map } from '@komore/reactive';
import { temporalToJavaScriptDate } from '@komore/temporal/compatibility';
import { asUrlString } from '@komore/url';

import { cloudStorageEvent } from '../../cloud-storage.event';
import { type CloudStorageCommandEventHandler } from '../cloud-storage-command-event-handler';

/**
 * Creates a create Cloud Storage pre-signed URL command-event handler
 *
 * @param storage Cloud Storage
 * @returns Create Cloud Storage pre-signed URL command-event handler
 * @private
 */
export function createCloudStoragePreSignedUrl(
  storage: Storage
): CloudStorageCommandEventHandler<'createPreSignedUrl'> {
  return ({ action, bucketName, expirationTime, objectPath, queryParameters: queryParams }) =>
    deferPromise(() =>
      storage
        .bucket(bucketName)
        .file(objectPath)
        .getSignedUrl({
          action,
          expires: temporalToJavaScriptDate(expirationTime),
          ...(queryParams !== undefined ? { queryParams } : {}),
        })
    ).pipe(
      map(([preSignedUrl]) => asUrlString(preSignedUrl)),
      map(preSignedUrl => cloudStorageEvent.preSignedUrlCreated({ preSignedUrl }))
    );
}
