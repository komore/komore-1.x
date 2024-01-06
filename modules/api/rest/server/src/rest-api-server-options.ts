import { type HttpServerOptions } from '@komore/http/server';

/**
 * REST API server options
 */
export interface RestApiServerOptions extends Omit<HttpServerOptions, 'handler'> {}
