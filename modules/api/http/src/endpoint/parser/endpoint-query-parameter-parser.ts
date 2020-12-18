import { HttpContext } from '../../http-context';
import { EndpointParameters } from '../endpoint-parameters';

/**
 * Endpoint query parameter parser
 * @template ExistingQueryParameterTypes Existing query parameter types
 * @template QueryParameterTypes Path parameter types
 */
export type EndpointPathParameterParser<
  ExistingQueryParameterTypes extends Record<string, string>,
  QueryParameterTypes extends ExistingQueryParameterTypes
> = (
  httpContext: HttpContext<EndpointParameters<any, ExistingQueryParameterTypes, any, any>>
) => HttpContext<EndpointParameters<any, QueryParameterTypes, any, any>> | false;
