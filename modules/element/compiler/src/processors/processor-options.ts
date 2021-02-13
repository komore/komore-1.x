import type { recordLogEvent } from "@komore/observability/logging";

/**
 * Processor options
 */
export interface ProcessorOptions {
  readonly reporter?: typeof recordLogEvent;
}
