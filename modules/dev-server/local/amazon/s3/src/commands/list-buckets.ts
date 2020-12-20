import { ListBucketsOutput } from '@aws-sdk/client-s3';
import { Command } from '@komore/dev-server-local-amazon/service';
import { pipe } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { getBuckets } from '../s3-buckets';

/**
 * Lists all buckets owned by the authenticated sender of the request
 * @note {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBuckets.html ListBuckets}
 */
export const listBuckets: Command<void, ListBucketsOutput> = pipe(
  mergeMap(() => getBuckets()),
  map(buckets => ({ Buckets: [...buckets] }))
);
