import { match } from 'path-to-regexp';
import { ParseUrlPathParameters } from '../specification/parse-url-path-parameters';
import { EndpointPathParameterParser } from './endpoint-path-parameter-parser';

/**
 * Builds an endpoint path parameter parser
 * @param pathSpecification Path specification
 * @returns Endpoint path parameter parser
 */
export function buildEndpointPathParameterParser<PathSpecification extends string>(
  pathSpecification: PathSpecification
): EndpointPathParameterParser<any, ParseUrlPathParameters<PathSpecification>> {
  const extractPathParameters = match(pathSpecification, { decode: decodeURIComponent, end: false });

  return httpContext => {
    const extractedPathParameters = extractPathParameters(httpContext.unprocessedPath);
    if (extractedPathParameters === false) {
      return false;
    }

    return {
      ...httpContext,
      endpointParameters: {
        ...httpContext.endpointParameters,
        path: {
          ...httpContext.endpointParameters.path,
          ...extractedPathParameters.params
        }
      },
      unprocessedPath: httpContext.unprocessedPath.substr(extractedPathParameters.path.length)
    };
  };
}
