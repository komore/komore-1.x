/**
 * Redux devtools serialization options
 */
export interface ReduxDevtoolsSerializationOptions {
  options?: boolean | unknown;
  replacer?(key: string, value: unknown): object;
  reviver?(key: string, value: unknown): object;
  immutable?: unknown;
  refs?: ReadonlyArray<unknown>;
}
