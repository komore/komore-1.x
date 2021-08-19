import type { Host } from '@komore/runtime';
import type { BrowserHostOptions } from './browser-host-options';

/**
 * Browser host
 */
export interface BrowserHost extends Host {
  readonly options: BrowserHostOptions;
}
