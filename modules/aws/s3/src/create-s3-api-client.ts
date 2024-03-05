import { createAwsApiClient } from '@komore/aws';
import { httpClientResponseToArrayBuffer } from '@komore/http/client';
import { map, mergeMap, tapNext } from '@komore/reactive';
import { createXmlParser, xmlToValue } from '@komore/xml';

import { type S3XmlResponse } from './response/s3-xml-response';
import { s3XmlResponseToResult } from './response/s3-xml-response-to-result';
import { type S3ApiClient } from './s3-api-client';
import { type S3ApiClientOptions } from './s3-api-client-options';

/**
 * Creates an S3 API client
 *
 * @param clientOptions S3 API client options
 * @returns S3 API client
 */
export function createS3ApiClient(clientOptions: S3ApiClientOptions): S3ApiClient {
  const { ...awsClientOptions } = clientOptions;
  const toArrayBuffer = httpClientResponseToArrayBuffer();
  const xmlParser = createXmlParser({});
  const awsApiClient = createAwsApiClient({
    ...awsClientOptions,
    service: 's3',
    toXml: (httpClientReponse =>
      toArrayBuffer(httpClientReponse).pipe(
        tapNext(x => console.log('before', x)),
        mergeMap(xmlToValue(xmlParser)),
        tapNext(x => console.log('after', x)),
        map(x => x)
      )) as NonNullable<Parameters<typeof createAwsApiClient>[0]['toXml']>,
    url: () => new URL(`https://s3.us-east-1.amazonaws.com`),
  });
  return <T, RootTag extends string>(rootTag: RootTag, operation: string, parameters?: unknown) =>
    awsApiClient<S3XmlResponse<string, T>>(operation, parameters).pipe(
      map(s3XmlResponseToResult(rootTag)),
      map(result => result as T)
    );
}
