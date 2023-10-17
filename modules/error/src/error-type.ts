import { type TypeSchemaType } from '@komore/typescript';

import { type ErrorGroupDefinitions } from './group/error-group-definitions';
import { type GenericErrorGroup } from './group/generic-error-group';

/**
 * Error type
 *
 * @template ErrorGroupType Error group type
 * @template ErrorCode Error code
 */
export interface ErrorType<
  ErrorGroupType extends GenericErrorGroup,
  ErrorCode extends keyof ErrorGroupDefinitions<ErrorGroupType>,
> extends Error {
  /**
   * Error code
   */
  readonly code: ErrorCode;
  /**
   * Error context
   */
  readonly context: TypeSchemaType<ErrorGroupDefinitions<ErrorGroupType>[ErrorCode]>;
  /**
   * Error group
   */
  readonly group: ErrorGroupType;
  /**
   * Error name
   */
  readonly name: 'KomoreError';
}
