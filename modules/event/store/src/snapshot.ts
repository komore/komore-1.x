/**
 * Snapshot
 * @template StateType State type
 */
export interface Snapshot<StateType> {
  readonly aggregateKey: string;
  readonly sequenceNumber: number;
  readonly state: StateType;
  readonly timestamp: Date;
}

/**
 * Snapshot state type
 * @template SnapshotType Snapshot type
 */
export type SnapshotStateType<SnapshotType> = SnapshotType extends Snapshot<infer StateType> ? StateType : never;
