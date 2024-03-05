import { AwsAccessKeyCredentials } from '@komore/aws';
import { createKinesisApiClient, listKinesisStreams } from '@komore/aws/kinesis';
import { HttpClient } from '@komore/http/client';
import { NodeEnvironmentVariables } from '@komore/node/environment';

export function getStreams(
  httpClient: HttpClient,
  environmentVariables: NodeEnvironmentVariables,
  credentials: AwsAccessKeyCredentials
): Observable<unknown> {
  const kinesisApiClient = createKinesisApiClient({ credentials, environmentVariables, httpClient });
  const listStreams = listKinesisStreams(kinesisApiClient);
  return listStreams({});
}
