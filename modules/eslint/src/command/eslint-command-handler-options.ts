import { type ESLint } from 'eslint';

import { type CommandEventRecorder } from '@komore/client';

import { type esLintCommand } from '../eslint.command';
import { type esLintEvent } from '../eslint.event';

/**
 * ESLint command handler options
 */
export interface EsLintCommandHandlerOptions {
  /**
   * ESLint instance
   */
  readonly esLint: ESLint;
  /**
   * ESLint events recorder
   */
  readonly toEvents: CommandEventRecorder<typeof esLintCommand, typeof esLintEvent>;
}
