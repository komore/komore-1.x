import { type ReadonlyRecord } from '@komore/typescript';

export function mapToValue<K, V>(map: ReadonlyMap<K, V>, key: K): V | undefined;
export function mapToValue<K, V>(map: Map<K, V>, key: K, factory: (key: K) => V): V;

export function mapToValue<K, V>(map: Map<K, V> | ReadonlyMap<K, V>, key: K, factory?: (key: K) => V): V | undefined {
  const existingValue = map.get(key);
  if (existingValue !== undefined) {
    return existingValue;
  }

  if (factory !== undefined) {
    const newValue = factory(key);
    (map as Map<K, V>).set(key, newValue);
    return newValue;
  }

  return undefined;
}

type T = ReadonlyRecord<string, unknown>;
let x: T | undefined = undefined;
x = undefined;
x;
