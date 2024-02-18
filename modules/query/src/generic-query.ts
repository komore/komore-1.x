import { type Domain } from '@komore/domain';

import { type Query } from './query';

/**
 * Generic query
 */
export type GenericQuery = Query<Domain, string, readonly [resultType: any, parametersType: any]>;
