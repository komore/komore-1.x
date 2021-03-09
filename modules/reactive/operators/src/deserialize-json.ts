import type { OperatorFunction } from '@komore/reactive';
import { map } from './map';

type DeserializeJsonParameters = Parameters<typeof JSON.parse> extends [infer _, ...(infer Parameters)]
  ? Parameters
  : never;

/**
 * Operator function that deserializes a JSON object
 * @param reviver Reviver (cf. JSON.parse)
 */
export function deserializeJson<T>(...parameters: DeserializeJsonParameters): OperatorFunction<string, T> {
  return map(value => JSON.parse(value, ...parameters));
}
