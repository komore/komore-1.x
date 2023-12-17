import { type TypeCreator } from '@komore/typescript';

import { type QueryCreator } from '../creator/query-creator';

/**
 * Query creator entry
 *
 * @private
 */
export type QueryCreatorEntry = readonly [queryName: string, queryCreator: QueryCreator<string, TypeCreator<any, any>>];
