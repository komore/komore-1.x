import type { Observer } from 'rxjs';
import type { WorkerObserverOptions } from './worker-observer-options';

/**
 * Creates a worker observer that posts emitted messages to a worker
 * @param worker Dedicated or shared worker
 * @param options Worker observer options
 * @returns Worker observer
 * @template OutgoingType Outgoing type
 */
export function toWorker<OutgoingType = unknown>(
  worker: Worker | SharedWorker,
  options?: WorkerObserverOptions<OutgoingType>
): Observer<OutgoingType> {
  const terminateOnCompletion = terminateOnCompletionOptions.includes(options?.terminateOn);
  const terminateOnError = terminateOnErrorOptions.includes(options?.terminateOn);
  const target = worker instanceof SharedWorker ? worker.port : worker;

  function next(value: OutgoingType): void {
    if (options?.selectTransferables !== undefined) {
      const transferables = options?.selectTransferables(value);
      target.postMessage(value, [...transferables]);
    } else {
      target.postMessage(value);
    }
  }

  function error(_error: unknown): void {
    if (terminateOnError) {
      terminateWorker(worker);
    }
  }

  function complete(): void {
    if (terminateOnCompletion) {
      terminateWorker(worker);
    }
  }

  return {
    next,
    error,
    complete
  };
}

type TerminateOnOption = WorkerObserverOptions['terminateOn'];
const terminateOnCompletionOptions: ReadonlyArray<TerminateOnOption> = ['complete', 'complete-and-error'];
const terminateOnErrorOptions: ReadonlyArray<TerminateOnOption> = ['complete-and-error', 'error'];

/**
 * Terminates a dedicated or share worker
 * @param worker Dedicated or shared worker
 */
function terminateWorker(worker: Worker | SharedWorker): void {
  if (worker instanceof SharedWorker) {
    worker.port.close();
  } else {
    worker.terminate();
  }
}
