import { type ESLint } from 'eslint';

import { type EventFromType } from '@komore/event';
import { type Observable, type Subject } from '@komore/reactive';

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
   * ESLint events subject
   */
  readonly events: Subject<EventFromType<typeof esLintEvent>>;
}
