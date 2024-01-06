import { createClientCommandEventMap } from '@komore/client';

import { type esbuildCommand } from '../esbuild.command';
import { type esbuildEvent } from '../esbuild.event';

/**
 * esbuild command event map
 */
export const esbuildCommandEventMap = createClientCommandEventMap<typeof esbuildCommand, typeof esbuildEvent>()({
  build: 'built',
});
