/**
 * Read-only record
 * @template K Key type
 * @template T Value type
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ReadonlyRecord<K extends keyof any, T> = {
  readonly [P in K]: T;
};
