import { ParseUrlParameters } from '../url/parse-url-parameters';
import { HttpEndpointParameters } from './http-endpoint-parameters';

export type ParseEndpointParameters<EndpointSpecification extends string> = HttpEndpointParameters<any, any, any, any>;
