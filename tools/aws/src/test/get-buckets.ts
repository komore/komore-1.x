import { AwsAccessKeyCredentials } from '@komore/aws';
import { createS3ApiClient, listS3Buckets } from '@komore/aws/s3';
import { HttpClient } from '@komore/http/client';
import { NodeEnvironmentVariables } from '@komore/node/environment';

export function getBuckets(
  httpClient: HttpClient,
  environmentVariables: NodeEnvironmentVariables,
  credentials: AwsAccessKeyCredentials
): Observable<unknown> {
  const s3ApiClient = createS3ApiClient({ credentials, environmentVariables, httpClient });
  const listBuckets = listS3Buckets(s3ApiClient);
  return listBuckets();
}
