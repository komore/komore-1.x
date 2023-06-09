import { type CapacitorHostOptions } from '@komore/capacitor';

/**
 * Android host options
 */
export interface AndroidHostOptions extends CapacitorHostOptions {
  readonly _android?: unknown;
}
