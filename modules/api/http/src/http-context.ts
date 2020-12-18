import * as Koa from 'koa';
import { EndpointParameters } from './endpoint/endpoint-parameters';

/**
 * HTTP context
 * @template EndpointParameterTypes Endpoint parameter types
 */
export type HttpContext<EndpointParameterTypes extends EndpointParameters<any, any, any, any>> = Readonly<{
  endpointParameters: EndpointParameterTypes;
  method: string;
  unprocessedPath: string;
  url: URL;
  _context: Koa.Context;
}>;
