import type { Temporal } from '@komore/temporal';

/**
 * Gets a JavaScript Date from a temporal
 * @param temporal Temporal
 * @returns JavaScript Date object
 */
export function getJavaScriptDate(temporal: ): Date {
  return new Date(temporal._.epochMilliseconds);
}
