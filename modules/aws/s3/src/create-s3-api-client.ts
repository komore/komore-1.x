import {
  awsApiClientHeaderSignatureStrategy,
  awsApiClientXmlParametersStrategy,
  awsApiClientXmlResultStrategy,
  createAwsApiClient,
  type AwsApiClientParametersWithProcessedResponse,
  type AwsApiClientParametersWithHttpClientResponse,
} from '@komore/aws';
import { type HttpClientResponse } from '@komore/http/client';
import { map } from '@komore/reactive';
import { createXmlParser } from '@komore/xml';

import { type S3ApiClientParameters } from './parameters/s3-api-client-parameters';
import { type S3XmlResponse } from './response/s3-xml-response';
import { s3XmlResponseToResult } from './response/s3-xml-response-to-result';
import { type S3ApiClient } from './s3-api-client';
import { type S3ApiClientOptions } from './s3-api-client-options';
import { s3ApiClientUrlStrategy } from './s3-api-client-url-strategy';

/**
 * Creates an S3 API client
 *
 * @param clientOptions S3 API client options
 * @returns S3 API client
 */
export function createS3ApiClient(clientOptions: S3ApiClientOptions): S3ApiClient {
  const { ...awsClientOptions } = clientOptions;
  const service = 's3';
  const xmlParser = createXmlParser({});
  const awsApiClient = createAwsApiClient({
    ...awsClientOptions,
    service,
    strategies: {
      parameters: awsApiClientXmlParametersStrategy({ xmlParser }),
      result: [awsApiClientXmlResultStrategy({ xmlParser })],
      signature: awsApiClientHeaderSignatureStrategy({}),
      url: s3ApiClientUrlStrategy(),
    },
  });
  return <RootTag extends string, T, X>(
    clientParameters: S3ApiClientParameters<T> & {
      readonly projectXml?: (xmlResult: X) => T;
      readonly response?: true;
      readonly rootTag?: RootTag;
    }
  ): Observable<HttpClientResponse | T> => {
    const { Bucket, projectXml, response = false, rootTag, ...remainingClientParameters } = clientParameters;
    const baseClientParameters = {
      ...remainingClientParameters,
      ...(Bucket === undefined ? { region: 'us-east-1' } : {}),
    };

    if (response) {
      return awsApiClient({ ...baseClientParameters, response } as AwsApiClientParametersWithHttpClientResponse);
    }

    const result$ = awsApiClient<S3XmlResponse<string, T>>(
      baseClientParameters as AwsApiClientParametersWithProcessedResponse<S3XmlResponse<string, T>>
    );

    return rootTag !== undefined
      ? result$.pipe(
          map(s3XmlResponseToResult(rootTag)),
          map(result => (projectXml !== undefined ? projectXml(result as X) : (result as T)))
        )
      : (result$ as Observable<T>);
  };
}
