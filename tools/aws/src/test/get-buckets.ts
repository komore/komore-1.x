import { type AwsApiServiceClientOptions } from '@komore/aws';
import { createS3ApiClient, listS3Buckets } from '@komore/aws/s3';

export function getBuckets(clientOptions: AwsApiServiceClientOptions) {
  const s3ApiClient = createS3ApiClient(clientOptions);
  const listBuckets = listS3Buckets(s3ApiClient);
  return listBuckets();
}
