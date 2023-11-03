import { type ErrorInstance } from './error-instance';
import { type ErrorTypeDefinitions } from './type/error-type-definitions';
import { type GenericErrorType } from './type/generic-error-type';

/**
 * Generic error instance
 */
export type GenericErrorInstance = ErrorInstance<GenericErrorType, keyof ErrorTypeDefinitions<GenericErrorType>>;
