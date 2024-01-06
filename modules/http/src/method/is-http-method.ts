import { httpMethods } from './http-methods';
import { type HttpMethod } from './http-method';

/**
 * Tests whether a string is a known HTTP method
 *
 * @param httpMethod HTTP method string
 * @returns true if the string is a known HTTP method
 */
export function isHttpMethod(httpMethod: string): httpMethod is HttpMethod {
  return set.has(httpMethod);
}

const set: ReadonlySet<string> = new Set(httpMethods);
