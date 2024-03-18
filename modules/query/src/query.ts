import { type Domain } from '@komore/domain';

/**
 * Query
 *
 * @template DomainType Domain type
 * @template QueryName Query name
 * @template QueryPropertiesResult Query properties and result types
 */
export interface Query<
  DomainType extends Domain = Domain,
  QueryName extends string = string,
  QueryPropertiesResult extends readonly [resultType: any, parametersType: any] = readonly [
    resultType: any,
    parametersType: any,
  ],
> {
  /**
   * Domain
   */
  readonly domain: DomainType;
  /**
   * Query name
   */
  readonly name: QueryName;
  /**
   * Query parameters
   */
  readonly parameters: QueryPropertiesResult[1];
  // TODO: change model
  (result: QueryPropertiesResult[0]): QueryPropertiesResult[0];
}
