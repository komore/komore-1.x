import { type Logger } from '@komore/logging';

/**
 * HTTP server options
 */
export interface HttpServerOptions {
  /**
   * Host
   */
  readonly host: string;
  /**
   * Logger
   */
  readonly logger: Logger;
  /**
   * Port
   */
  readonly port: string | number;
}
