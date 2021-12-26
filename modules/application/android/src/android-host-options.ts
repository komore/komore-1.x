import { type CapacitorHostOptions } from '@komore/application-capacitor';

/**
 * Android host options
 */
export interface AndroidHostOptions extends CapacitorHostOptions {
  readonly _android?: unknown;
}
