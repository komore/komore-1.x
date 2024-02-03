import { createHttpServer } from '@komore/http/server';
import { map } from '@komore/reactive';

import { type RestApiServer } from './rest-api-server';
import { type RestApiServerOptions } from './rest-api-server-options';

/**
 * Creates a REST API server
 *
 * @param serverOptions REST API server options
 * @returns REST API server
 */
export function createRestApiServer(serverOptions: RestApiServerOptions): Observable<RestApiServer> {
  const { ...httpServerOptions } = serverOptions;

  return createHttpServer({
    ...httpServerOptions,
    handler: request$ =>
      request$.pipe(
        map(() => ({
          headers: [],
          statusCode: 200,
        }))
      ),
  });
}
