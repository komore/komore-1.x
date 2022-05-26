import { Temporal } from '@js-temporal/polyfill';
import { type NowProvider } from './now-provider';

/**
 * Creates a default now provider implementation
 *
 * @returns Default now provider
 */
export function createDefaultNowProvider(): NowProvider {
  return () => Temporal.Now.plainDateTimeISO();
}
