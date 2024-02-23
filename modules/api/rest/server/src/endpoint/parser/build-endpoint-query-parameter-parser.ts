import { type ParseUrlQueryParameters } from '../url/parse-url-query-parameters';
import { type EndpointQueryParameterParser } from './endpoint-query-parameter-parser';

/**
 * Builds an endpoint query parameter parser
 * @param querySpecification Query specification
 * @returns Endpoint path parameter parser
 */
export function buildEndpointQueryParameterParser<PathSpecification extends string>(
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
          ...extractedPathParameters.params,
        },
      },
      unprocessedPath: httpContext.unprocessedPath.substr(extractedPathParameters.path.length),
    };
  };
}
