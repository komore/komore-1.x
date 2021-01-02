import { Observable, Subscriber } from 'rxjs';
import { HttpResponseProgress } from './http-response-progress';

/**
 * HTTP response progress observable
 */
export class HttpResponseProgressObservable extends Observable<HttpResponseProgress> {
  constructor(reader: ReadableStreamDefaultReader<Uint8Array>, controller: ReadableByteStreamController) {
    super(observer => {
      reader.read();
    });
  }

  private async push(
    reader: ReadableStreamDefaultReader<Uint8Array>,
    controller: ReadableByteStreamController,
    observer: Subscriber<HttpResponseProgress>
  ): Promise<void> {
    const { done, value } = await reader.read();

    if (done) {
      controller.close();
      observer.complete();
      return;
    }

    if (value) {
      observer.next(value);
    }

    controller.enqueue(value);
  }
}
