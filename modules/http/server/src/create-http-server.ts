import { HttpServer } from './http-server';
import { HttpServerOptions } from './http-server-options';

/**
 * Creates an HTTP server
 *
 * @param options HTTP server options
 * @returns HTTP server
 */
export function createHttpServer(options: HttpServerOptions): HttpServer {
  const { host, port } = options;
  return {
    host,
    port: typeof port === 'string' ? port : `${port}`,
  };
}
