import { type TypeCreator } from '@komore/typescript';

import { type ErrorCreator } from './error-creator';

/**
 * Error from a creator type
 *
 * @template CreatorType Creator type
 */
export type ErrorFromCreator<CreatorType extends ErrorCreator<string, TypeCreator<any, any>>> = ReturnType<CreatorType>;
