/**
 * Type names
 */
export interface TypeNames {
  bigint: bigint;
  boolean: boolean;
  function: (...args: unknown[]) => unknown;
  number: number;
  object: Record<string, unknown>;
  undefined: undefined;
  string: string;
  symbol: symbol;
}
