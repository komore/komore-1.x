import { type HttpClientResponse, httpClientResponseToArrayBuffer } from '@komore/http/client';
import { map, mergeMap } from '@komore/reactive';
import { createXmlParser, xmlToValue } from '@komore/xml';

import { type AwsApiClientResultStrategy } from './aws-api-client-result-strategy';

/**
 * Creates an AWS API client XML result strategy
 *
 * @returns AWS API client XML result strategy
 */
export function awsApiClientXmlResultStrategy(): AwsApiClientResultStrategy {
  const toArrayBuffer = httpClientResponseToArrayBuffer();
  const xmlParser = createXmlParser({});
  const mediaTypes = new Set(['application/xml']);
  const type = 'result';

  return {
    // TODO: proper error handling
    httpClientResponseToResult: <T>(httpClientReponse: HttpClientResponse) =>
      toArrayBuffer(httpClientReponse).pipe(
        mergeMap(xmlToValue(xmlParser)),
        map(x => x as T)
      ),
    mediaTypes,
    type,
  };
}
