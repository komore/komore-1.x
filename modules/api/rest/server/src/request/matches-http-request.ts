import { isString } from '@komore/string';

import { type HttpMethod } from '@komore/http';
import { type HttpServerRequest } from '@komore/http/server';

/**
 * Creates a function that tests whether an HTTP request matches a method and path
 *
 * @param expectedMethod Expected method
 * @param expectedPath Expected path
 * @returns Function that tests whether an HTTP request matches a method and path
 * @private
 */
export function matchesHttpRequest(
  expectedMethod: HttpMethod | ((method: HttpMethod) => boolean),
  expectedPath: string | ((path: string) => boolean)
): (httpServerRequest: HttpServerRequest) => boolean {
  const isSameMethod = isString(expectedMethod) ? (method: string) => method === expectedMethod : expectedMethod;
  const isSamePath = isString(expectedPath) ? (path: string) => path === expectedPath : expectedPath;
  return ({ method, url: { pathname: path } }) => {
    const sameMethod = isSameMethod(method);
    const samePath = isSamePath(path);
    return sameMethod && samePath;
  };
}
