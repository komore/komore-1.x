import { type IncomingMessage, type ServerResponse } from 'node:http';

import { isErrorOfType } from '@komore/error';
import { entriesToObject } from '@komore/functional';
import { httpStatuses } from '@komore/http';
import { nodeFileSystemError } from '@komore/node/file-system';
import { catchErrorIf, mergeMap, of, tapNext } from '@komore/reactive';

import { type HttpServerOptions } from '../http-server-options';
import { readStreamToServerResponse } from './file/read-stream-to-server-response';
import { type HttpServerResponse } from './http-server-response';

/**
 * Creates a function that returns a Node server response, given an HTTP server response
 *
 * @param options HTTP server options
 * @param serverResponse Node server response created as part of the request handling
 * @returns Function that returns a Node server response, given an HTTP server response
 */
export function httpServerResponseToServerResponse(
  options: HttpServerOptions,
  serverResponse: ServerResponse<IncomingMessage>
): (httpServerResponse: HttpServerResponse) => Observable<ServerResponse<IncomingMessage>> {
  const defaultHeaders = options.headers?.default;

  return httpServerResponse => {
    const { body, fileStream$, headers, statusCode } = httpServerResponse;
    const allHeaders = defaultHeaders !== undefined ? [...defaultHeaders, ...headers] : headers;
    const outgoingHttpHeaders = entriesToObject(allHeaders);
    const writeHead = () => serverResponse.writeHead(statusCode, undefined, outgoingHttpHeaders);

    if (fileStream$ !== undefined) {
      return fileStream$.pipe(
        tapNext(writeHead),
        mergeMap(readStreamToServerResponse(serverResponse)),
        catchErrorIf(isErrorOfType(nodeFileSystemError.fileNotFound), () => {
          serverResponse.writeHead(httpStatuses.NotFound);
          serverResponse.end();
          return of(serverResponse);
        })
      );
    }

    writeHead();

    if (body !== undefined) {
      // TODO: should wait for the callback
      serverResponse.write(body);
    }

    serverResponse.end();

    return of(serverResponse);
  };
}
