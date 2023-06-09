import { type Host } from '@komore/runtime';

import { type CapacitorHostOptions } from './capacitor-host-options';

/**
 * Capacitor host
 */
export interface CapacitorHost extends Host {
  /**
   * Options
   */
  readonly options: CapacitorHostOptions;
}
