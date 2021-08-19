import type { BrowserHostOptions } from './browser-host-options';

/**
 * Builds browser host options with default values when necessary
 * @param hostOptions Host options
 * @returns Host options with default values when necessary
 */
export function buildBrowserHostOptions(_hostOptions?: Partial<BrowserHostOptions>): BrowserHostOptions {
  return {};
}
