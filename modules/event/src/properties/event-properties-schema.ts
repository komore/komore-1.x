import { type TypeSchema } from '@komore/typescript';

import { type eventPropertiesSchemaTypeName } from './event-properties-schema-type-name';

/**
 * Event properties schema
 *
 * @template SchemaType Schema type
 * @private
 */
export type EventPropertiesSchema<SchemaType> = TypeSchema<typeof eventPropertiesSchemaTypeName, SchemaType>;
