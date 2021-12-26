import { Temporal } from '@js-temporal/polyfill';
import { type NowProvider } from './now-provider';

/**
 * Default now provider implementation
 */
export const defaultNowProvider: NowProvider = () => Temporal.Now.plainDateTimeISO();
