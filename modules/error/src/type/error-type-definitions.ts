import { type GenericDomain } from '@komore/domain';

import { type ErrorType } from './error-type';
import { type GenericErrorType } from './generic-error-type';

/**
 * Error type definitions, given an error type
 *
 * @template T Error type
 * @private
 */
export type ErrorTypeDefinitions<T extends GenericErrorType> = T extends ErrorType<GenericDomain, infer Definitions>
  ? Definitions
  : never;
