import { createClientCommandEventMap } from '@komore/client';

import { type esLintCommand } from '../eslint.command';
import { type esLintEvent } from '../eslint.event';

/**
 * ESLint command-to-event map
 */
export const esLintCommandEventMap = createClientCommandEventMap<typeof esLintCommand, typeof esLintEvent>()({
  lintFiles: 'filesLinted',
});
