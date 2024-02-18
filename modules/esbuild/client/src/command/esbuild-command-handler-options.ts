import { type CommandEventPair } from '@komore/client';
import { type CommandFromType } from '@komore/command';
import { type EsbuildCliClient } from '@komore/esbuild';
import { type EventFromType } from '@komore/event';

import { type esbuildCommand } from '../esbuild.command';
import { type esbuildEvent } from '../esbuild.event';

/**
 * esbuild command handler options
 */
export interface EsbuildCommandHandlerOptions {
  /**
   * esbuild CLI client
   */
  readonly cliClient: EsbuildCliClient;
  /**
   * esbuild events recorder
   */
  readonly toEvents: (
    pair: CommandEventPair<CommandFromType<typeof esbuildCommand>, EventFromType<typeof esbuildEvent>>
  ) => void;
}
