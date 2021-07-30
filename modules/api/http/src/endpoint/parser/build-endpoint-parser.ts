import type { HttpContext } from '../../http-context';
import type { EndpointParameters } from '../endpoint-parameters';
import type { ParseEndpointParameters } from '../parse-endpoint-parameters';
import type { EndpointParser } from './endpoint-parser';

/**
 * Builds an endpoint parser
 * @param endpointSpecification Endpoint specification
 * @template EndpointParameterTypes Endpoint parameter types
 * @template EndpointSpecification Endpoint specification
 */
export function buildEndpointParser<
  EndpointParameterTypes extends EndpointParameters<any, any, any, any>,
  EndpointSpecification extends string
>(
  endpointSpecification: EndpointSpecification
): EndpointParser<EndpointParameterTypes, ParseEndpointParameters<EndpointSpecification>> {
  return httpContext => httpContext.url.searchParams.get();
}
