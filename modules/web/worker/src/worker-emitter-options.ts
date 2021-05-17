/**
 * Worker emitter options
 */
export interface WorkerEmitterOptions<OutgoingType = unknown> {
  /**
   * Function that returns a list of transferables from an outgoing value
   * @param value Outgoing value
   * @returns List of transferables
   */
  readonly selectTransferables?: (value: OutgoingType) => ReadonlyArray<Transferable>;
}
