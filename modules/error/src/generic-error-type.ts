import { type ErrorType } from './error-type';
import { type ErrorGroupDefinitions } from './group/error-group-definitions';
import { type GenericErrorGroup } from './group/generic-error-group';

/**
 * Generic error type
 */
export type GenericErrorType = ErrorType<GenericErrorGroup, keyof ErrorGroupDefinitions<GenericErrorGroup>>;
