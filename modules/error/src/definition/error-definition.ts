import { type ReadonlyRecord } from '@komore/typescript';

import { type ErrorPropertiesSchema } from '../properties/error-properties-schema';

/**
 * Error definition
 *
 * @template ErrorCode Error code
 * @template ErrorProperties Error properties
 */
export type ErrorDefinition<ErrorProperties extends ErrorPropertiesSchema<ReadonlyRecord<string, unknown>>> = readonly [
  /**
   * Error description
   */
  errorDescription: string,
  /**
   * Error properties
   */
  errorProperties: ErrorProperties
];
