/**
 * Snapshot
 * @template StateType State type
 */
export type Snapshot<StateType> = Readonly<{
  aggregateKey: string;
  sequenceNumber: number;
  state: StateType;
  timestamp: Date;
}>;

export type SnapshotStateType<SnapshotType> = SnapshotType extends Snapshot<infer StateType> ? StateType : never;
