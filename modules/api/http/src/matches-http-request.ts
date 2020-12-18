import { HttpRequest } from './http-request';

/**
 * Tests whether an HTTP request matches a method and path
 * @param httpRequest HTTP request
 * @param method Method
 * @param path Path
 * @returns true if the HTTP request matches the method and path
 */
export function matchesHttpRequest<RequestType>(
  httpRequest: HttpRequest<RequestType>,
  method: string | ((method: string) => boolean),
  path: string | ((path: string) => boolean)
): boolean {
  const httpRequestMethod = httpRequest.context.method;
  const httpRequestPath = httpRequest.context.path;
  const sameMethod = typeof method === 'string' ? method === httpRequestMethod : method(httpRequestMethod);
  const samePath = typeof path === 'string' ? path === httpRequestPath : path(httpRequestPath);
  return sameMethod && samePath;
}
