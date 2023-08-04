import { of } from '@komore/reactive';

import { type CloudflareClient } from './cloudflare-client';
import { type CloudflareClientOptions } from './cloudflare-client-options';

/**
 * Creates a Cloudflare client
 *
 * @param options Cloudflare client options
 * @returns Cloudflare client
 */
export function createCloudflareClient(_options: CloudflareClientOptions): CloudflareClient {
  return () => of(void 0);
}
