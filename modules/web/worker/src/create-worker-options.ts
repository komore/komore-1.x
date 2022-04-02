import { type WorkerObserverOptions } from './worker-observer-options';

/**
 * Create worker options
 */
export interface CreateWorkerOptions extends WorkerOptions, WorkerObserverOptions {}
