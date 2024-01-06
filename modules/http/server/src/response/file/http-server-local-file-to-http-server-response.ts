import { createContentDispositionHttpHeader, createContentTypeHttpHeader, httpStatuses } from '@komore/http';
import { createFileReadStream } from '@komore/node/file-system';

import { type HttpServerResponse } from '../http-server-response';
import { type HttpServerLocalFile } from './http-server-local-file';

export function httpServerLocalFileToHttpServerResponse(httpServerLocalFile: HttpServerLocalFile): HttpServerResponse {
  const { fileName, mediaType } = httpServerLocalFile;
  const contentTypeHeader = createContentTypeHttpHeader(mediaType);
  const headers = [
    contentTypeHeader,
    ...(fileName !== undefined ? [createContentDispositionHttpHeader('attachment', fileName)] : []),
  ];
  const statusCode = httpStatuses.Ok;

  if ('filePath' in httpServerLocalFile) {
    const { filePath } = httpServerLocalFile;
    const fileStream$ = createFileReadStream(filePath);
    return {
      fileStream$,
      headers,
      statusCode,
    };
  } else {
    const { fileContent: body } = httpServerLocalFile;
    return {
      body,
      headers,
      statusCode,
    };
  }
}
