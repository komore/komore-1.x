import { type HttpServerLocalFileProperties } from './http-server-local-file-properties';

/**
 * HTTP server local file content
 */
export interface HttpServerLocalFileContent extends HttpServerLocalFileProperties {
  /**
   * File content
   */
  readonly fileContent: string;
}
