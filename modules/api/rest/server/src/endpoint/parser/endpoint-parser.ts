import { HttpContext } from '../../http-context';
import { EndpointParameters } from '../endpoint-parameters';

/**
 * Endpoint parser
 * @template ExistingEndpointParameterTypes Existing endpoint parameter types
 * @template EndpointParameterTypes Endpoint parameter types
 */
export type EndpointParser<
  ExistingEndpointParameterTypes extends EndpointParameters<any, any, any, any>,
  EndpointParameterTypes extends ExistingEndpointParameterTypes
> = (httpContext: HttpContext<ExistingEndpointParameterTypes>) => HttpContext<EndpointParameterTypes> | undefined;
