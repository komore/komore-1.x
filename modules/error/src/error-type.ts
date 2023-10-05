import { type Domain } from '@komore/domain';
import { type ReadonlyRecord } from '@komore/typescript';

import { type ErrorGroup } from './group/error-group';
import { type ErrorGroupDefinitions } from './group/error-group-definitions';
import { type ErrorPropertiesSchema } from './properties/error-properties-schema';

/**
 * Error type
 *
 * @template ErrorGroupType Error group type
 * @template ErrorCode Error code
 */
export interface ErrorType<
  ErrorGroupType extends ErrorGroup<
    Domain<string>,
    ReadonlyRecord<string, ErrorPropertiesSchema<ReadonlyRecord<string, unknown>>>
  >,
  ErrorCode extends keyof ErrorGroupDefinitions<ErrorGroupType>,
> extends Error {
  /**
   * Error code
   */
  readonly code: ErrorCode;
  /**
   * Error context
   */
  readonly context: ErrorGroupDefinitions<ErrorGroupType>[ErrorCode];
  /**
   * Error group
   */
  readonly group: ErrorGroupType;
  /**
   * Error name
   */
  readonly name: 'KomoreError';
}
