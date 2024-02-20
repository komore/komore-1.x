import { type CommandEventPair } from '@komore/client';
import { type CommandFromType } from '@komore/command';
import { type EventFromType } from '@komore/event';

import { type openTofuCommand } from '../opentofu.command';
import { type openTofuEvent } from '../opentofu.event';

/**
 * OpenTofu command handler options
 */
export interface OpenTofuCommandHandlerOptions {
  /**
   * OpenTofu events recorder
   */
  readonly toEvents: (
    pair: CommandEventPair<CommandFromType<typeof openTofuCommand>, EventFromType<typeof openTofuEvent>>
  ) => void;
  /**
   * Working directory
   */
  readonly workingDirectory: string;
}
