import { typeSchema } from '@komore/typescript';

import { type CommandPropertiesSchema } from './command-properties-schema';
import { commandPropertiesSchemaTypeName } from './command-properties-schema-type-name';

/**
 * Creates a command properties schema
 *
 * @returns Command properties schema
 * @template SchemaType Schema type
 */
export function commandProperties(): CommandPropertiesSchema<void>;
export function commandProperties<SchemaType>(): CommandPropertiesSchema<SchemaType>;

export function commandProperties<SchemaType>(): CommandPropertiesSchema<SchemaType> {
  return typeSchema<typeof commandPropertiesSchemaTypeName, SchemaType>(commandPropertiesSchemaTypeName);
}
