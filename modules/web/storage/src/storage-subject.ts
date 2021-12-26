import { Observable, Subject } from '@komore/reactive';
import { type StorageSubjectOptions } from './storage-subject-options';

/**
 * Default serializer
 * @param value Value
 * @returns Serialized value
 */
function defaultSerializer<ValueType>(value: ValueType): string {
  return JSON.stringify(value);
}

/**
 * Default deserializer
 * @param serializedValue Serialized value
 * @returns Value
 */
function defaultDeserializer<ValueType>(serializedValue: string): ValueType {
  return JSON.parse(serializedValue);
}

/**
 * Storage subject
 * @template ValueType Value type
 */
export class StorageSubject<ValueType> extends Observable<ValueType | undefined> {
  private readonly subject$ = new Subject<ValueType | undefined>();
  private readonly options: StorageSubjectOptions<ValueType>;

  /**
   * Class constructor
   * @param storage Storage
   * @param key Key
   * @param options Options
   */
  constructor(
    private readonly storage: Storage,
    private readonly key: string,
    options?: Partial<StorageSubjectOptions<ValueType>>
  ) {
    super();
    this.options = {
      deserialize: options?.deserialize ?? defaultDeserializer,
      serialize: options?.serialize ?? defaultSerializer,
      watchExternalChanges: options?.watchExternalChanges ?? false
    };
  }

  next(value: ValueType | undefined): void {
    if (value === undefined) {
      this.storage.removeItem(this.key);
    } else {
      this.writeValue(value);
    }

    this.subject$.next(value);
  }

  private readValue(): ValueType | undefined {
    const serializedValue = this.storage.getItem(this.key) ?? undefined;
    return serializedValue !== undefined ? this.options.deserialize(serializedValue) : undefined;
  }

  private writeValue(value: ValueType): void {
    const serializedValue = this.options.serialize(value);
    this.storage.setItem(this.key, serializedValue);
  }
}
