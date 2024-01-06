import { httpStatuses } from '@komore/http';
import { map, type Observable } from '@komore/reactive';

import { type HttpServerRequest } from '../../request/http-server-request';
import { type HttpServerResponse } from '../http-server-response';
import { type HttpServerLocalFile } from './http-server-local-file';
import { httpServerLocalFileToHttpServerResponse } from './http-server-local-file-to-http-server-response';

export function httpServerRequestToLocalFile(
  project: (httpServerRequest: HttpServerRequest) => Observable<HttpServerLocalFile | undefined>
): (httpServerRequest: HttpServerRequest) => Observable<HttpServerResponse> {
  return httpServerRequest =>
    project(httpServerRequest).pipe(
      map(httpServerLocalFile => {
        if (httpServerLocalFile === undefined) {
          return {
            headers: [],
            statusCode: httpStatuses.NotFound,
          };
        }

        return httpServerLocalFileToHttpServerResponse(httpServerLocalFile);
      })
    );
}
