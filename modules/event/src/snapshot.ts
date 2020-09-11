/**
 * Snapshot
 * @template S State type
 */
export type Snapshot<S> = Readonly<{
  aggregateKey: string;
  sequenceNumber: number;
  state: S;
  timestamp: Date;
}>;
