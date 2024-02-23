import { type EndpointParameters } from '../endpoint-parameters';
import { type ParseEndpointParameters } from '../specification/parse-endpoint-parameters';
import { type EndpointParser } from './endpoint-parser';

/**
 * Builds an endpoint parser
 * @param endpointSpecification Endpoint specification
 * @template EndpointParameterTypes Endpoint parameter types
 * @template EndpointSpecification Endpoint specification
 */
export function buildEndpointParser<
  EndpointParameterTypes extends EndpointParameters<any, any, any, any>,
  EndpointSpecification extends string,
>(
  _endpointSpecification: EndpointSpecification
): EndpointParser<EndpointParameterTypes, ParseEndpointParameters<EndpointSpecification>> {
  return httpContext => httpContext.url.searchParams.get();
}
