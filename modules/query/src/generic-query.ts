import { type GenericDomain } from '@komore/domain';

import { type Query } from './query';

/**
 * Generic query
 */
export type GenericQuery = Query<GenericDomain, string, readonly [resultType: any, parametersType: any]>;
