import { ListObjectsV2Output, ListObjectsV2Request } from '@aws-sdk/client-s3';
import { Observable, of } from 'rxjs';

export function listObjectsV2(request: ListObjectsV2Request): Observable<ListObjectsV2Output> {
  return of();
}
