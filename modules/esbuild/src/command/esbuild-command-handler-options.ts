import { type CommandEventPair } from '@komore/client';
import { type CommandFromType } from '@komore/command';
import { type EventFromType } from '@komore/event';
import { type Observable } from '@komore/reactive';

import { type esbuildCommand } from '../esbuild.command';
import { type esbuildEvent } from '../esbuild.event';

/**
 * esbuild command handler options
 */
export interface EsbuildCommandHandlerOptions {
  /**
   * Observable initialized state
   */
  readonly initialized$: Observable<void>;
  /**
   * esbuild events recorder
   */
  readonly toEvents: (
    pair: CommandEventPair<CommandFromType<typeof esbuildCommand>, EventFromType<typeof esbuildEvent>>
  ) => void;
}
