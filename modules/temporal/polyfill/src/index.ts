import { Intl as IntlPolyfill, Temporal as TemporalPolyfill, toTemporalInstant } from '@js-temporal/polyfill';

globalThis.Temporal = TemporalPolyfill;
globalThis.Intl = IntlPolyfill as unknown as typeof globalThis.Intl;

(Date.prototype as { toTemporalInstant: typeof toTemporalInstant }).toTemporalInstant = toTemporalInstant;
