import { isNotNull } from '@komore/functional';
import { map, ReplaySubject, scan, type Observable } from '@komore/reactive';
import { assert } from '@komore/runtime';
import { controllerToResponseProgressChunks } from './controller-to-response-progress-chunks';
import { type ResponseProgress } from './response-progress';
import { responseProgressChunkToResponseProgress } from './response-progress-chunk-to-response-progress';
import { ResponseProgressUnderlyingSource } from './response-progress-underlying-source';
import { type ResponseWithProgress } from './response-with-progress';

/**
 * Creates a response with progress from a plain response
 * @param response Response
 * @returns Response with progress
 */
export function responseToResponseWithProgress(response: Response): Observable<ResponseWithProgress> {
  const { body, headers, status } = response;
  assert(isNotNull(body), `TODO: handle null body in withResponseProgress`);
  const contentLengthString = headers.get('content-length') ?? undefined;
  const contentLength = Number(contentLengthString);
  const bytesTotal = !isNaN(contentLength) ? contentLength : undefined;
  const reader = body.getReader();
  const progressBytes = new ReplaySubject<Uint8Array>(1);
  const underlyingSource = new ResponseProgressUnderlyingSource(
    controllerToResponseProgressChunks(reader, progressBytes)
  );
  const stream = new ReadableStream(underlyingSource);
  const responseWithStream = new Response(stream, { headers, status });
  const initialResponseProgress: ResponseProgress = {
    bytesPerSecond: 0,
    bytesTotal,
    bytesTransferred: 0,
  };

  return progressBytes.asObservable().pipe(
    scan(responseProgressChunkToResponseProgress, initialResponseProgress),
    map(responseProgress => [responseWithStream, responseProgress])
  );
}
