import { type ReadonlyRecord, type TypeSchemaType } from '@komore/typescript';

import { type QueryPropertiesSchema } from './query-properties-schema';

/**
 * Query properties from query definitions
 *
 * @template QueryDefinitions Query definitions
 */
export type QueryPropertiesFromQueryDefinitions<
  QueryDefinitions extends ReadonlyRecord<
    string,
    QueryPropertiesSchema<readonly [resultType: any, parametersType: any]>
  >,
> = {
  [QueryName in keyof QueryDefinitions & string]: TypeSchemaType<QueryDefinitions[QueryName]>;
};
