/**
 * Redux devtools serialization options
 */
export interface ReduxDevtoolsSerializationOptions {
  readonly options?: boolean | unknown;
  readonly replacer?: (key: string, value: unknown) => Record<string, unknown>;
  readonly reviver?: (key: string, value: unknown) => Record<string, unknown>;
  readonly immutable?: unknown;
  readonly refs?: ReadonlyArray<unknown>;
}
