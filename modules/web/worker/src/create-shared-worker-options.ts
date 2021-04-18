/**
 * Create shared worker options
 */
export type CreateSharedWorkerOptions = WorkerOptions & {
  readonly closeOnCompletion?: boolean;
}
