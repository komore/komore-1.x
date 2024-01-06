import { type ReadonlyRecord } from '@komore/typescript';

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

  const toPropertyDescriptor: <K extends keyof Properties>(propertyKey: K, value: Properties[K]) => PropertyDescriptor =
    typeof propertyDescriptor === 'function'
      ? (propertyKey, value) => ({ ...propertyDescriptor(propertyKey, value), value })
      : (_, value) => ({ ...propertyDescriptor, value });
  const propertyEntries = Object.entries(properties);
  const propertyDescriptors = propertyEntries.reduce((acc, [propertyKey, value]) => {
    acc[propertyKey] = toPropertyDescriptor(propertyKey, value as Properties[string]);
    return acc;
  }, {} as PropertyDescriptorMap);

  return <T>(object: T) => Object.defineProperties(object, propertyDescriptors) as T & Properties;
}
