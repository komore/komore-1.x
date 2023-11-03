import { type TypeSchema } from '@komore/typescript';

import { type commandPropertiesSchemaTypeName } from './command-properties-schema-type-name';

/**
 * Command properties schema
 *
 * @template SchemaType Schema type
 * @private
 */
export type CommandPropertiesSchema<SchemaType> = TypeSchema<typeof commandPropertiesSchemaTypeName, SchemaType>;
