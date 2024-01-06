import { type BuildOptions, type BuildResult } from 'esbuild';

import { createEventType, eventProperties } from '@komore/event';

import { esbuildDomain } from './esbuild.domain';

/**
 * esbuild event
 */
export const esbuildEvent = createEventType(esbuildDomain, {
  built: eventProperties<BuildResult<BuildOptions>>(),
});
