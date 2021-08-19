import type { Host } from "@komore/runtime";

/**
 * Capacitor host
 */
export interface CapacitorHost extends Host {
  readonly options: CapacitorHostOptions;
}
