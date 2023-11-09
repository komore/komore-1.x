import { type ErrorFromCreator } from '../creator/error-from-creator';
import { type GenericErrorType } from './generic-error-type';

/**
 * Error from error type
 *
 * @template ErrorType Error type
 */
export type ErrorFromType<ErrorType extends GenericErrorType> = ErrorFromCreator<ErrorType[keyof ErrorType & string]>;
