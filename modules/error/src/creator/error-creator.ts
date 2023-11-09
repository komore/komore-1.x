import { type TypeCreator } from '@komore/typescript';

/**
 * Error creator
 *
 * @template ErrorCode Error code
 * @template TypeCreatorType Type creator type
 * @private
 */
export type ErrorCreator<ErrorCode extends string, TypeCreatorType extends TypeCreator<any, any>> = {
  /**
   * Error code
   */
  readonly code: ErrorCode;
} & TypeCreatorType;
