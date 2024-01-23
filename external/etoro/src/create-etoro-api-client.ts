import { httpClientResponseToText } from '@komore/http/client';
import { map, mergeMap } from '@komore/reactive';

import { type EToroApiClient } from './etoro-api-client';
import { type EToroApiClientOptions } from './etoro-api-client-options';

/**
 * Creates an eToro API client
 *
 * @param clientOptions eToro API client options
 * @returns eToro API client
 */
export function createEToroApiClient(clientOptions: EToroApiClientOptions): EToroApiClient {
  const { httpClient, token } = clientOptions;
  const userAgent =
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
  const byType = {
    etoro: {
      endpointUrl: clientOptions.endpointUrl ?? new URL('https://www.etoro.com/'),
      headers: [
        ['Accounttype', 'Real'],
        ['Applicationidentifier', 'ReToro'],
        ['Applicationversion', '638.0.1'],
        ['Authorization', token],
        ['User-Agent', userAgent],
        ['Sec-Ch-Ua', '"Not_A Brand";v="8", "Chromium";v="120", "Brave";v="120"'],
        ['Sec-Ch-Ua-Mobile', '?0'],
        ['Sec-Ch-Ua-Platform', '"Windows"'],
        ['Sec-Fetch-Dest', 'empty'],
        ['Sec-Fetch-Site', 'same-origin'],
        ['Sec-Gpc', '1'],
      ] as const,
    },
    static: {
      endpointUrl: clientOptions.staticEndpointUrl ?? new URL('https://api.etorostatic.com/'),
      headers: [],
    },
  };
  return <T>(type: 'etoro' | 'static', method: 'GET', resourcePath: string, body?: unknown) => {
    const { endpointUrl, headers = [] } = byType[type];
    const url = new URL(resourcePath, endpointUrl);
    return httpClient({ headers, method, url, ...(body !== undefined ? { body } : {}) }).pipe(
      mergeMap(httpClientResponseToText()),
      map(x => {
        try {
          return JSON.parse(x) as T;
        } catch (e) {
          console.log(`oops ${url}`, x);
          return void 0 as unknown as T;
        }
      })
    );
  };
}
