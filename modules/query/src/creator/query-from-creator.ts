import { type TypeCreator } from '@komore/typescript';

import { type QueryCreator } from './query-creator';

/**
 * Query from a creator type
 *
 * @template CreatorType Creator type
 * @private
 */
export type QueryFromCreator<CreatorType extends QueryCreator<string, TypeCreator<any, any>>> = ReturnType<CreatorType>;
