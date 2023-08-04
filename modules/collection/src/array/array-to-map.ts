/**
 * Creates a function that maps an array to a map
 *
 * @param keyMapper Function that maps an array element to a map key
 * @param valueMapper Function that maps an array element to a map value
 * @param merger Function that merges duplicate keys
 * @returns Function that maps an array to a map
 */
export function arrayToMap<ElementType, KeyType, ValueType = ElementType>(
  keyMapper: (element: ElementType) => KeyType,
  valueMapper?: (element: ElementType, key: KeyType) => ValueType,
  merger?: (existingValue: ValueType, newValue: ValueType, key: KeyType) => ValueType
): (elements: ReadonlyArray<ElementType>) => Map<KeyType, ValueType> {
  if (merger === undefined) {
    if (valueMapper !== undefined) {
      return elements =>
        new Map(
          elements.map(element => {
            const key = keyMapper(element);
            const value = valueMapper(element, key);
            return [key, value] as const;
          })
        );
    } else {
      return elements =>
        new Map(elements.map(element => [keyMapper(element), element as unknown as ValueType] as const));
    }
  } else {
    return elements => {
      const m = new Map<KeyType, ValueType>();
      for (const element of elements) {
        const key = keyMapper(element);
        const newValue = valueMapper ? valueMapper(element, key) : (element as unknown as ValueType);
        const existingValue = m.get(key);
        const value = existingValue !== undefined ? merger(existingValue, newValue, key) : newValue;
        m.set(key, value);
      }
      return m;
    };
  }
}
