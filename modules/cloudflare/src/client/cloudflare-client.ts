import { type Observable } from '@komore/reactive';

/**
 * Cloudflare client
 */
export interface CloudflareClient {
  (): Observable<void>;
}
