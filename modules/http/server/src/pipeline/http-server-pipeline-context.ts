import { type IncomingMessage, type ServerResponse } from 'node:http';

import { type HttpServerResponse } from '../response/http-server-response';

/**
 * HTTP server pipeline context
 */
export type HttpServerPipelineContext = readonly [
  nodeHttpRequest: IncomingMessage,
  toServerResponse: (httpServerResponse: HttpServerResponse) => Observable<ServerResponse<IncomingMessage>>,
];
