import { type ReadonlyRecord } from '@komore/typescript';

import { type HttpApiServerVariable } from './http-api-server-variable';

/**
 * HTTP API server
 */
export interface HttpApiServer {
  /**
   * Description
   */
  readonly description: string;
  /**
   * Name
   */
  readonly name: string;
  /**
   * URL string
   */
  readonly url: URL;
  /**
   * Server variables
   */
  readonly variables?: ReadonlyRecord<string, HttpApiServerVariable>;
}
