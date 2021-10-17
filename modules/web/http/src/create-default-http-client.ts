import { not } from '@komore/functional';
import { throwIf } from '@komore/reactive';
import { createHttpClient } from './create-http-client';
import type { HttpClient } from './http-client';
import { isResponseOk } from './is-response-ok';
import { toHttpErrorResponse } from './to-http-error-response';

/**
 * Creates a default HTTP client
 *
 * The default HTTP client behaves like the generic HTTP client created with `createHttpClient` but also turns responses
 * that are generally considered to be errors into thrown HTTP response errors.
 *
 * @param options HTTP client options
 * @returns HTTP client that turns failed responses into thrown HTTP response errors
 */
export function createDefaultHttpClient(...options: Parameters<typeof createHttpClient>): HttpClient {
  const httpClient = createHttpClient(...options);
  const defaultHttpClient = (...parameters: Parameters<HttpClient>) =>
    httpClient(...parameters).pipe(throwIf(not(isResponseOk), toHttpErrorResponse));
  return defaultHttpClient as HttpClient;
}
