/**
 * Storage subject options
 * @template ValueType Value type
 */
export type StorageSubjectOptions<ValueType> = Readonly<{
  deserialize: (serializedValue: string) => ValueType;
  serialize: (value: ValueType) => string;
  watchExternalChanges: boolean;
}>;
