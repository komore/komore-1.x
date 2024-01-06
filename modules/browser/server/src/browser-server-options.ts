import { type HttpServerOptions } from '@komore/http/server';

/**
 * Browser server options
 */
export interface BrowserServerOptions extends Omit<HttpServerOptions, 'handler'> {
  /**
   * Paths
   */
  readonly paths: {
    /**
     * index.html path
     */
    readonly indexHtml: string;
    /**
     * Root path
     */
    readonly rootPath: string;
    /**
     * tsconfig.json file path
     */
    readonly tsConfigPath: string;
  };
}
