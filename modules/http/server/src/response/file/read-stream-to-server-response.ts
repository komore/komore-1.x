import { type ReadStream } from 'node:fs';
import { type IncomingMessage, type ServerResponse } from 'node:http';

import { Observable } from '@komore/reactive';

export function readStreamToServerResponse(
  serverResponse: ServerResponse<IncomingMessage>
): (readStream: ReadStream) => Observable<ServerResponse<IncomingMessage>> {
  return readStream =>
    new Observable<ServerResponse<IncomingMessage>>(subscriber => {
      serverResponse.on('finish', () => {
        subscriber.next(serverResponse);
        subscriber.complete();
      });

      readStream.pipe(serverResponse, { end: true });
    });
}
