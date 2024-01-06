import { type IncomingMessage, type ServerResponse } from 'node:http';

import { type Subject } from '@komore/reactive';

import { type HttpServerOptions } from '../http-server-options';
import { httpServerResponseToServerResponse } from '../response/http-server-response-to-server-response';
import { type HttpServerPipelineContext } from './http-server-pipeline-context';

/**
 * Creates a function that forwards a Node HTTP request and response to an HTTP server pipeline context subject
 *
 * @param options HTTP server options
 * @param subject HTTP server pipeline context subject
 * @returns Function that forwards a Node HTTP request and response to an HTTP server pipeline context subject
 */
export function nodeRequestToHttpServerPipelineContextSubject(
  options: HttpServerOptions,
  subject: Subject<HttpServerPipelineContext>
): (nodeHttpRequest: IncomingMessage, nodeHttpResponse: ServerResponse<IncomingMessage>) => void {
  return (nodeHttpRequest, nodeHttpResponse) => {
    const toServerResponse = httpServerResponseToServerResponse(options, nodeHttpResponse);
    subject.next([nodeHttpRequest, toServerResponse]);
  };
}
