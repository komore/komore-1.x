import { type HttpHeader as AzureCoreHttpHeader } from '@azure/core-http';

import { type HttpHeader } from '@komore/http';

/**
 * Returns an HTTP header, given an Azure Core HTTP header
 *
 * @param httpHeader Azure Core HTTP header
 * @returns HTTP header
 * @private
 */
export function azureCoreHttpHeaderToHttpHeader(httpHeader: AzureCoreHttpHeader): HttpHeader {
  const { name, value } = httpHeader;
  return [name, value];
}
