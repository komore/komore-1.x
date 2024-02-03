import { type ESLint } from 'eslint';

import { type CommandEventPair } from '@komore/client';
import { CommandFromType } from '@komore/command';
import { type EventFromType } from '@komore/event';

import { type esLintCommand } from '../eslint.command';
import { type esLintEvent } from '../eslint.event';

/**
 * ESLint command handler options
 */
export interface EsLintCommandHandlerOptions {
  /**
   * ESLint instance
   */
  readonly esLint$: Observable<ESLint>;
  /**
   * ESLint events recorded
   */
  readonly toEvents: (
    pair: CommandEventPair<CommandFromType<typeof esLintCommand>, EventFromType<typeof esLintEvent>>
  ) => void;
}
