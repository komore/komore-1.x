import { type ReadonlyRecord, type TypeSchemaType } from '@komore/typescript';

import { type ErrorPropertiesSchema } from '../properties/error-properties-schema';
import { ErrorDefinition } from './error-definition';

/**
 * Error definition properties
 *
 * @template ErrorCode Error code
 * @template ErrorProperties Error properties
 */
export type ErrorDefinitionProperties<
  Definition extends ErrorDefinition<ErrorPropertiesSchema<ReadonlyRecord<string, unknown>>>
> = Definition extends ErrorDefinition<ErrorPropertiesSchema<ReadonlyRecord<string, unknown>>>
  ? TypeSchemaType<Definition[1]>
  : never;
