import { type QueryFromType, type QueryHandler, type QueryType as GenericQueryType } from '@komore/query';

import { type ClientQueryHandlerFactoryOptions } from './client-query-handler-factory-options';

/**
 * Client query handler factory
 */
export interface ClientQueryHandlerFactory<QueryType extends GenericQueryType> {
  (factoryOptions: ClientQueryHandlerFactoryOptions<QueryType>): QueryHandler<QueryFromType<QueryType>>;
}
