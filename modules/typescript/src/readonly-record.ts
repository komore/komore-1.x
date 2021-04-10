/**
 * Read-only record
 * @template K Key type
 * @template T Value type
 */
export type ReadonlyRecord<K extends keyof any, T> = {
  readonly [P in K]: T;
};
