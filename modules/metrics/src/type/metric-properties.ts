import { typeSchema } from '@komore/typescript';

import { type MetricPropertiesSchema } from './metric-properties-schema';
import { metricPropertiesSchemaTypeName } from './metric-properties-schema-type-name';

/**
 * Creates a metric properties schema
 *
 * @returns Metric properties schema
 */

export function metricProperties<SchemaType>(): MetricPropertiesSchema<SchemaType> {
  return typeSchema<typeof metricPropertiesSchemaTypeName, SchemaType>(metricPropertiesSchemaTypeName);
}
