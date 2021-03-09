/**
 * Storage subject options
 * @template ValueType Value type
 */
export interface StorageSubjectOptions<ValueType> {
  readonly deserialize: (serializedValue: string) => ValueType;
  readonly serialize: (value: ValueType) => string;
  readonly watchExternalChanges: boolean;
}
