import { type Observer } from '@komore/reactive';

/**
 * Creates a function that reads progress from a controller and sends the information to an observer
 *
 * @param reader Reader
 * @param observer Observer
 * @returns Function that reads progress from a controller and sends the information to an observer
 * @private
 */
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
