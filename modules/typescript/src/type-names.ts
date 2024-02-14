/**
 * Type names
 */
export interface TypeNames {
  readonly bigint: bigint;
  readonly boolean: boolean;
  readonly function: (...args: ReadonlyArray<unknown>) => unknown;
  readonly number: number;
  readonly object: Record<string, unknown>;
  readonly undefined: undefined;
  readonly string: string;
  readonly symbol: symbol;
}
