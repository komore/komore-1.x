import { type HttpMethod } from '@komore/http';
import { httpClientResponseToJson } from '@komore/http/client';
import { mergeMap } from '@komore/reactive';

import { createSendGridApiClientHttpHeaders } from './create-sendgrid-api-client-http-headers';
import { type SendGridApiClient } from './sendgrid-api-client';
import { type SendGridApiClientOptions } from './sendgrid-api-client-options';

/**
 * Creates a SendGrid API client
 *
 * @param clientOptions SendGrid API client options
 * @returns SendGrid API client
 * @private
 */
export function createSendGridApiClient(clientOptions: SendGridApiClientOptions): SendGridApiClient {
  const { endpointUrl, httpClient } = clientOptions;
  const headers = createSendGridApiClientHttpHeaders(clientOptions);

  return <ResponseType>(method: HttpMethod, path: string, payload?: unknown) => {
    const url = new URL(path, endpointUrl);
    const body = payload !== undefined ? JSON.stringify(payload) : undefined;
    return httpClient({ method, url, headers, ...(body !== undefined ? { options: { body } } : {}) }).pipe(
      mergeMap(httpClientResponseToJson<ResponseType>())
    );
  };
}
