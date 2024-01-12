import { type HttpHeader } from '@komore/http';

import { type SendGridApiClientOptions } from './sendgrid-api-client-options';

/**
 * Creates a SendGrid API client on-behalf-of HTTP header
 *
 * @param onBehalfOf The customer account or subuser the request is made on behalf of
 * @returns HTTP header
 * @private
 */
export function createSendGridApiClientOnBehalfOfHttpHeader(
  onBehalfOf: NonNullable<SendGridApiClientOptions['onBehalfOf']>
): HttpHeader {
  const headerName = 'on-behalf-of';
  return [
    headerName,
    'customerAccountId' in onBehalfOf ? `account-id ${onBehalfOf.customerAccountId}` : onBehalfOf.subUserName,
  ];
}
