import { createAuthorizationHttpHeader, type HttpHeader } from '@komore/http';

import { createSendGridApiClientOnBehalfOfHttpHeader } from './create-sendgrid-api-client-on-behalf-of-http-header';
import { type SendGridApiClientOptions } from './sendgrid-api-client-options';

/**
 * Returns a list of HTTP headers meant to be sent with every API request made by the SendGrid API client
 *
 * @param clientOptions SendGrid API client options
 * @returns List of HTTP headers
 * @private
 */
export function createSendGridApiClientHttpHeaders(
  clientOptions: Pick<SendGridApiClientOptions, 'apiKey' | 'onBehalfOf'>
): ReadonlyArray<HttpHeader> {
  const { apiKey, onBehalfOf } = clientOptions;
  const behalfHeader = onBehalfOf !== undefined ? createSendGridApiClientOnBehalfOfHttpHeader(onBehalfOf) : undefined;
  return [createAuthorizationHttpHeader('Bearer', apiKey), ...(behalfHeader !== undefined ? [behalfHeader] : [])];
}
