import type { Temporal } from './temporal';

export function toDate(temporal: Temporal): Date {
  return temporal._;
}
