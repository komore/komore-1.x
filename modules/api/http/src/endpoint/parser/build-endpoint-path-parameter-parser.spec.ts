import { HttpContext } from '../../http-context';
import { buildEndpointPathParameterParser } from './build-endpoint-path-parameter-parser';
import { EndpointParameters } from '../endpoint-parameters';

describe('Build endpoint path parameter parser', () => {
  describe('with no path parameters', () => {
    const parse = buildEndpointPathParameterParser('/test/path');

    it('builds a parser that matches exact paths', () => {
      // given: an HTTP context with a matching path
      const httpContext = buildHttpContext('/test/path');
      // when: parsing the context
      const result = parse(httpContext);
      // then: the result is a new correctly built HTTP context
      expectParsed(result);
      expect(result.endpointParameters).toEqual(httpContext.endpointParameters);
      expect(result.unprocessedPath.length).toBe(0);
      expect(result.method).toBe(httpContext.method);
      expect(result.url).toBe(httpContext.url);
      expect(result._context).toBe(httpContext._context);
    });

    it('builds a parser that matches longer paths', () => {
      // given: an HTTP context with a matching path
      const httpContext = buildHttpContext('/test/path/longer');
      // when: parsing the context
      const result = parse(httpContext);
      // then: the result is a new correctly built HTTP context
      expectParsed(result);
      expect(result.unprocessedPath).toBe('/longer');
    });

    it('builds a parser that fails with non-matching paths', () => {
      // given: an HTTP context with a non-matching path
      const httpContext = buildHttpContext('/not-test/path');
      // when: parsing the context
      const result = parse(httpContext);
      // then: the result is false
      expect(result).toBe(false);
    });
  });

  describe('with path parameters', () => {
    const parse = buildEndpointPathParameterParser('/test/:param');

    it('builds a parser that matches exact paths', () => {
      // given: an HTTP context with a matching path
      const httpContext = buildHttpContext('/test/path');
      // when: parsing the context
      const result = parse(httpContext);
      // then: the result is a new correctly built HTTP context
      expectParsed(result);
      expect(result.endpointParameters.path.param).toBe('path');
      expect(result.unprocessedPath.length).toBe(0);
      expect(result.method).toBe(httpContext.method);
      expect(result.url).toBe(httpContext.url);
      expect(result._context).toBe(httpContext._context);
    });
  });
});

function buildHttpContext<ExistingPathParameterTypes extends Record<string, string> = {}>(
  unprocessedPath: string,
  existingPathParameters?: ExistingPathParameterTypes
) {
  const httpContext: HttpContext<EndpointParameters<ExistingPathParameterTypes, any, any, any>> = {
    endpointParameters: {
      header: {},
      path: existingPathParameters ?? ({} as ExistingPathParameterTypes),
      payload: {},
      query: {}
    },
    method: 'GET',
    unprocessedPath,
    url: undefined as any,
    _context: undefined as any
  };

  return httpContext;
}

function expectParsed<HttpContextType extends HttpContext<any>>(
  result: HttpContextType | false
): asserts result is HttpContextType {
  expect(result).not.toBe(false);
}
