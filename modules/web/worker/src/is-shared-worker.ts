
export function isSharedWorker(): boolean {
  return self instanceof SharedWorkerGlobalScope;
}