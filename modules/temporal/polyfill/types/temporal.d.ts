import {
  type Intl as IntlPolyfill,
  type Temporal as TemporalPolyfill,
  type toTemporalInstant,
} from '@js-temporal/polyfill';

declare global {
  interface Date {
    readonly toTemporalInstant: typeof toTemporalInstant;
  }
  export import Intl = IntlPolyfill;
  export import Temporal = TemporalPolyfill;
}
