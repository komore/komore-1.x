import { type ReadonlyRecord } from '@komore/typescript';

import { objectToEntries } from './object-to-entries';

export function objectWithProperties<Properties extends ReadonlyRecord<string, unknown>>(
  properties: Properties,
  propertyDescriptor?:
    | Omit<PropertyDescriptor, 'value'>
    | (<K extends keyof Properties>(propertyKey: K, value: Properties[K]) => Omit<PropertyDescriptor, 'value'>)
): <T>(object: T) => T & Properties {
  if (propertyDescriptor === undefined) {
    return object => ({
      ...object,
      ...properties,
    });
  }

  const propertyEntries = objectToEntries(properties);
  const propertyDescriptors = propertyEntries.reduce(toPropertyDescriptors(propertyDescriptor), {});

  return <T>(object: T) => Object.defineProperties(object, propertyDescriptors) as T & Properties;
}

function toPropertyDescriptors<Properties extends ReadonlyRecord<string, unknown>>(
  propertyDescriptor:
    | Omit<PropertyDescriptor, 'value'>
    | (<K extends keyof Properties>(propertyKey: K, value: Properties[K]) => Omit<PropertyDescriptor, 'value'>)
): (
  acc: PropertyDescriptorMap,
  propertyEntry: readonly [propertyKey: string, propertyValue: unknown]
) => PropertyDescriptorMap {
  const toPropertyDescriptor: <K extends keyof Properties>(propertyKey: K, value: Properties[K]) => PropertyDescriptor =
    typeof propertyDescriptor === 'function'
      ? (propertyKey, value) => ({ ...propertyDescriptor(propertyKey, value), value })
      : (_, value) => ({ ...propertyDescriptor, value });

  return (acc, [propertyKey, value]) => ({
    ...acc,
    [propertyKey]: toPropertyDescriptor(propertyKey, value as Properties[string]),
  });
}
