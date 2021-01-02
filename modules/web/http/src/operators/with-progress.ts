import { OperatorFunction } from "rxjs";
import { map, mergeMap } from "rxjs/operators";

/**
 * Fetch underlying byte source
 */
class FetchUnderlyingByteSource implements UnderlyingByteSource {
  private controller: ReadableByteStreamController;

  /**
   * Class constructor
   * @param reader Reader
   */
  constructor(private readonly reader: ReadableStreamDefaultReader<Uint8Array>) {}

  start(controller: ReadableByteStreamController): void | PromiseLike<void> {
    controller.
  }

  private async push(): Promise<void> {
    try {
      const { done, value } = await this.reader.read();
      if (done) {
        
      }
    } catch (e) {
      
    }
  }
}

export function withProgress(): OperatorFunction<Response, Response> {
  return mergeMap(response => {
    const { body, headers, status } = response;
    response.json
    const contentLength = headers.get('content-length') ?? 0;
    const reader = body?.getReader()!;
    const underlyingSource = new FetchUnderlyingByteSource(reader);
    const stream = new ReadableStream(underlyingSource);
    return new Response(stream, { headers, status });
  });
}
