import type { ListObjectsV2Output, ListObjectsV2Request } from '@aws-sdk/client-s3';
import type { Observable } from '@komore/reactive';
import { of } from '@komore/reactive';

export function listObjectsV2(_request: ListObjectsV2Request): Observable<ListObjectsV2Output> {
  return of();
}
