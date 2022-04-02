import { type Observer } from '@komore/reactive';

export function controllerToResponseProgressChunks(
  reader: ReadableStreamDefaultReader<Uint8Array>,
  observer: Observer<Uint8Array>
): (controller: ReadableStreamController<Uint8Array>) => Promise<void> {
  return async function readProgress(controller: ReadableStreamController<Uint8Array>): Promise<void> {
    try {
      const { done, value } = await reader.read();
      if (done) {
        observer.complete();
        controller.close();
        return;
      }

      if (value !== undefined) {
        observer.next(value);
      }

      controller.enqueue(value);
      readProgress(controller);
    } catch (e) {
      observer.error(e);
    }
  };
}
