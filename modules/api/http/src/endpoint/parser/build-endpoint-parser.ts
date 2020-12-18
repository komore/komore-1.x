import { HttpContext } from '../../http-context';
import { EndpointParser } from './endpoint-parser';
import { EndpointParameters } from '../endpoint-parameters';
import { ParseEndpointParameters } from '../parse-endpoint-parameters';

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
