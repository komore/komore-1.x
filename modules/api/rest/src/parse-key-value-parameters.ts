/**
 * Extracts key-value parameters from a literal
 * @template Literal Literal
 */
export type ParseKeyValueParameters<Literal extends string> =
  Literal extends `${infer KeyName}=${infer ValueName}&${infer Remaining}`
    ? {[K in keyof KeyValueIfVariable<KeyName, ValueName>]: KeyValueIfVariable<KeyName, ValueName>[K]} & ParseKeyValueParameters<Remaining>
    : Literal extends `${infer KeyName}=${infer ValueName}`
      ? {[K in keyof KeyValueIfVariable<KeyName, ValueName>]: KeyValueIfVariable<KeyName, ValueName>[K]}
      : {}
;

type KeyValueIfVariable<KeyName extends string, ValueName extends string> =
  ValueName extends `:${infer PropertyName}`
    ? {[K in PropertyName]: KeyName}
    : {}
;
