import { HttpContext } from '../../http-context';
import { EndpointParameters } from '../endpoint-parameters';

/**
 * Endpoint path parameter parser
 * @template ExistingPathParameterTypes Existing path parameter types
 * @template PathParameterTypes Path parameter types
 */
export type EndpointPathParameterParser<
  ExistingPathParameterTypes extends Record<string, string>,
  PathParameterTypes extends ExistingPathParameterTypes
> = (
  httpContext: HttpContext<EndpointParameters<ExistingPathParameterTypes, any, any, any>>
) => HttpContext<EndpointParameters<PathParameterTypes, any, any, any>> | false;
