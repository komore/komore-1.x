/**
 *
 */
export function toMap<ElementType, KeyType>(
  keyMapper: (element: ElementType) => KeyType
): (elements: ReadonlyArray<ElementType>) => Map<KeyType, ElementType>;
export function toMap<ElementType, KeyType, ValueType>(
  keyMapper: (element: ElementType) => KeyType,
  valueMapper: (element: ElementType) => ValueType
): (elements: ReadonlyArray<ElementType>) => Map<KeyType, ValueType>;

export function toMap<ElementType, KeyType, ValueType>(
  keyMapper: (element: ElementType) => KeyType,
  valueMapper: (element: ElementType) => ValueType,
  merger: (lhs: ElementType, rhs: ElementType) => ValueType
): (elements: ReadonlyArray<ElementType>) => Map<KeyType, ValueType>;

export function toMap<ElementType, KeyType, ValueType>(
  keyMapper: (element: ElementType) => KeyType,
  valueMapper?: (element: ElementType) => ValueType,
  merger?: (lhs: ValueType, rhs: ValueType) => ValueType
): (elements: ReadonlyArray<ElementType>) => Map<KeyType, ValueType> {
  if (merger === undefined) {
    if (valueMapper !== undefined) {
      return elements => new Map(elements.map(element => [keyMapper(element), valueMapper(element)] as const));
    } else {
      return elements => new Map(elements.map(element => [keyMapper(element), element as unknown as ValueType] as const));
    }
  } else {
    return elements => {
      const m = new Map<KeyType, ValueType>();
      for (const element of elements) {
        const key = keyMapper(element);
        const newValue = valueMapper ? valueMapper(element) : (element as unknown as ValueType);
        const existingValue = m.get(key);
        const value = existingValue !== undefined
          ? merger(existingValue, newValue)
          : newValue
        m.set(key, value);
      }
      return m;
    }
  }
}
