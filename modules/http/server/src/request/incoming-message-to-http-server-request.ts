import { type IncomingMessage } from 'node:http';
import {} from 'node:url';

import { validateHttpMethod } from '@komore/http';

import { type HttpServerRequest } from './http-server-request';
import { incomingHttpHeadersToHttpHeaders } from './incoming-http-headers-to-http-headers';
import { incomingMessageToProtocol } from './incoming-message-to-protocol';

/**
 * Returns an HTTP server request, given an incoming message
 *
 * @param incomingMessage Incoming message
 * @returns HTTP server request
 */
export function incomingMessageToHttpServerRequest(incomingMessage: IncomingMessage): HttpServerRequest {
  const { socket } = incomingMessage;
  const protocol = incomingMessageToProtocol(incomingMessage);
  const host = incomingMessage.headers.host ?? socket.localAddress ?? 'unknown';
  const base = `${protocol}://${host}`;
  const url = new URL(incomingMessage.url ?? '', base);
  const headers = incomingHttpHeadersToHttpHeaders(incomingMessage.headers);
  const method = incomingMessage.method ?? '';

  incomingMessage.socket.localPort ?? 0;
  validateHttpMethod(method);

  return {
    headers,
    method,
    url,
  };
}
