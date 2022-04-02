import { not } from '@komore/functional';
import { of, throwIf } from '@komore/reactive';
import { toHttpErrorResponse } from './error/to-http-error-response';
import { withResponseInterceptor } from './interceptor/with-response-interceptor';
import { createHttpClient } from './create-http-client';
import { type HttpClient } from './http-client';
import { type HttpClientOptions } from './http-client-options';
import { isResponseOk } from './is-response-ok';

/**
 * Creates a default HTTP client
 *
 * The default HTTP client behaves like the generic HTTP client created with `createHttpClient` but also turns responses
 * that are generally considered to be errors into thrown HTTP response errors.
 *
 * @param options HTTP client options
 * @returns HTTP client that turns failed responses into thrown HTTP response errors
 * @template DefaultContextType Default contextual information type
 */
export function createDefaultHttpClient<DefaultContextType = undefined>(
  options?: HttpClientOptions
): HttpClient<DefaultContextType> {
  const httpClient = createHttpClient(options);
  return withResponseInterceptor(httpClient, response =>
    of(response).pipe(throwIf(not(isResponseOk), toHttpErrorResponse))
  );
}
