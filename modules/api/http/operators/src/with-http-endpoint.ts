import type { HttpContext } from '@komore/api/http';
import type { MonoTypeOperatorFunction, Observable } from '@komore/reactive';
import { mergeMap, of } from '@komore/reactive';

/**
 * Adds an HTTP endpoint with deeper endpoints to an HTTP context pipeline
 * @param path Path
 * @param endpoints Endpoints
 */
export function withHttpEndpoint(
  path: string,
  ...endpoints: ReadonlyArray<MonoTypeOperatorFunction<HttpContext>>
): MonoTypeOperatorFunction<HttpContext>;

/**
 * Adds an HTTP endpoint handler to an HTTP context pipeline
 * @param method Method
 * @param path Path
 * @param handler Handler
 * @param parser Parser
 */
export function withHttpEndpoint<ResponseType, RequestType>(
  method: string,
  path: string,
  handler: (request: RequestType) => Observable<ResponseType>,
  parser?: () => RequestType
): MonoTypeOperatorFunction<HttpContext>;

export function withHttpEndpoint<ResponseType, RequestType>(
  pathOrMethod: string | ((method: string) => boolean),
  projectOrPath:
    | ((httpContext$: Observable<HttpContext>) => Observable<HttpContext>)
    | string
    | ((path: string) => boolean),
  handler?: (request: RequestType) => Observable<ResponseType>,
  parser?: () => RequestType
): MonoTypeOperatorFunction<HttpContext> {
  if (handler !== undefined) {
    return withHttpEndpointHandler(
      pathOrMethod,
      projectOrPath as string | ((path: string) => boolean),
      handler,
      parser
    );
  } else {
    return withHttpEndpointProjection(
      pathOrMethod as string,
      projectOrPath as (httpContext$: Observable<HttpContext>) => Observable<HttpContext>
    );
  }
}

function withHttpEndpointProjection(
  path: string,
  project: (httpContext$: Observable<HttpContext>) => Observable<HttpContext>
): MonoTypeOperatorFunction<HttpContext> {
  return mergeMap(httpContext =>
    httpContext.path.startsWith(path)
      ? project(of({ ...httpContext, path: httpContext.path.substr(path.length) }))
      : of(httpContext)
  );
}

function withHttpEndpointHandler<
  ResponseType,
  RequestType,
  QueryParameterTypes extends Record<string, string> | undefined = undefined
>(
  verb: string | ((verb: string) => boolean),
  path: string | ((path: string) => boolean),
  handler: (request: RequestType) => Observable<ResponseType>,
  parser?: (context: HttpContext) => RequestType
): MonoTypeOperatorFunction<HttpContext> {
  parser ??= defaultParser;

  return mergeMap(httpRequest =>
    matchesHttpRequest(httpRequest, verb, path)
      ? handler(httpRequest).pipe(map(response => createHttpResponse(response)))
      : of(httpRequest)
  );
}

/**
 * Parses a request with sensible defaults
 *
 * @param httpContext HTTP context
 * @returns Request
 * @template RequestType Request type
 */
function defaultParser<RequestType>({ context }: HttpContext): RequestType {
  console.log('default parser');
  console.log('content type', context.headers);
  console.log('payload', context.body);
  return context.body;
}
