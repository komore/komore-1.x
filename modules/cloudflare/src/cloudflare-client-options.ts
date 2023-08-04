import { type Logger } from '@komore/logging';

/**
 * Cloudflare client options
 */
export interface CloudflareClientOptions {
  /**
   * API endpoint URL
   */
  readonly apiEndpointUrl: URL;
  /**
   * Logger
   */
  readonly logger: Logger;
}
