/**
 * Worker observer options
 * @template OutgoingType Outgoing type
 */
export interface WorkerObserverOptions<OutgoingType = unknown> {
  /**
   * Function that returns a list of transferables from an outgoing value
   * @param value Outgoing value
   * @returns List of transferables
   */
  readonly selectTransferables?: (value: OutgoingType) => ReadonlyArray<Transferable>;
  /**
   * The conditions for a dedicated worker to be terminated or a shared worker port to be closed
   * - `error` a dedicated worker to be terminated
   * - a shared worker's port to be closed
   *
   * By default, no action is performed when the observer receives an error or a completion notification
   */
   readonly terminateOn?: 'complete' | 'error' | 'complete-and-error';
}
