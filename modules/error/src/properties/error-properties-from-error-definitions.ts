import { type ReadonlyRecord, type TypeSchemaType } from '@komore/typescript';

import { type ErrorPropertiesSchema } from './error-properties-schema';

/**
 * Error properties from error definitions
 *
 * @template ErrorDefinitions Error definitions
 */
export type ErrorPropertiesFromErrorDefinitions<
  ErrorDefinitions extends ReadonlyRecord<string, ErrorPropertiesSchema<unknown>>,
> = {
  [ErrorCode in keyof ErrorDefinitions & string]: TypeSchemaType<ErrorDefinitions[ErrorCode]>;
};
