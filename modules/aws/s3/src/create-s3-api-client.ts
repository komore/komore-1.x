import { createAwsApiClient, type AwsApiClientOptions } from '@komore/aws';
import { httpClientResponseToArrayBuffer, type HttpClientResponse } from '@komore/http/client';
import { map, mergeMap, tapNext } from '@komore/reactive';
import { createXmlParser, xmlToValue } from '@komore/xml';

import { type S3XmlResponse } from './response/s3-xml-response';
import { s3XmlResponseToResult } from './response/s3-xml-response-to-result';
import { type S3ApiClient } from './s3-api-client';
import { type S3ApiClientOptions } from './s3-api-client-options';
import { type S3ApiClientParameters } from './s3-api-client-parameters';

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
      )) as NonNullable<AwsApiClientOptions['toXml']>,
    url: () => new URL(`https://s3.us-east-1.amazonaws.com`),
  });
  return <T, RootTag extends string>(
    clientParameters: S3ApiClientParameters & { readonly response?: true, readonly rootTag?: RootTag }
  ): Observable<HttpClientResponse | T> => {
    const { operation, parameters, response = false, rootTag } = clientParameters;
    if (response) {
      return awsApiClient({
        operation,
        parameters,
        response,
      });
    }

    const result$ = awsApiClient<S3XmlResponse<string, T>>({
      operation,
      parameters,
    });

    return rootTag !== undefined
      ? result$.pipe(
          map(s3XmlResponseToResult(rootTag)),
          map(result => result as T)
        )
      : (result$ as Observable<T>);
  };
}
