import type { Temporal } from './temporal';

/**
 * Clones a temporal, setting a new internal date representation
 * @param temporal Temporal
 * @param date Date or function that receives a copy of the temporal date and applies changes to it
 * @returns Cloned temporal
 * @template T Temporal type
 */
export function cloneTemporal<T extends Temporal>(temporal: T, date: Date | ((date: Date) => void)): T {
  return {
    ...temporal,
    _: prepareDate(temporal, date)
  };
}

/**
 * Prepares a date
 * @param temporal Temporal
 * @param date Date or function that receives a copy of the temporal date and applies changes to it
 * @returns Date
 */
function prepareDate(temporal: Temporal, date: Date | ((date: Date) => void)): Date {
  if (typeof date === 'function') {
    const d = new Date(temporal._);
    date(d);
    return d;
  }

  return date;
}
