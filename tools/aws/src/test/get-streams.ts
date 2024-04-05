import { type AwsApiServiceClientOptions } from '@komore/aws';
import { createKinesisApiClient, listKinesisStreams } from '@komore/aws/kinesis';

export function getStreams(clientOptions: AwsApiServiceClientOptions) {
  const kinesisApiClient = createKinesisApiClient(clientOptions);
  const listStreams = listKinesisStreams(kinesisApiClient);
  return listStreams({});
}
