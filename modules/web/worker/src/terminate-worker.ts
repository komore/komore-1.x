/**
 * Terminates a dedicated or share worker
 * @param worker Dedicated or shared worker
 */
export function terminateWorker(worker: Worker | SharedWorker): void {
  if (worker instanceof SharedWorker) {
    worker.port.close();
  } else {
    worker.terminate();
  }
}
