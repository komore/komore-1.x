import { Intl as IntlPolyfill, Temporal as TemporalPolyfill, toTemporalInstant } from '@js-temporal/polyfill';

declare global {
  interface Date {
    readonly toTemporalInstant: typeof toTemporalInstant;
  }
  export import Intl = IntlPolyfill;
  export import Temporal = TemporalPolyfill;
}
