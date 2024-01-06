import { type HttpServerLocalFileProperties } from './http-server-local-file-properties';

/**
 * HTTP server local file reference
 */
export interface HttpServerLocalFileReference extends HttpServerLocalFileProperties {
  /**
   * File path
   */
  readonly filePath: string;
}
