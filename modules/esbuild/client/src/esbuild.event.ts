import { createEventType, eventProperties } from '@komore/event';
import { esbuildDomain, type EsbuildBuildResult } from '@komore/esbuild';

/**
 * esbuild event
 */
export const esbuildEvent = createEventType(esbuildDomain, {
  built: eventProperties<EsbuildBuildResult>(),
});
