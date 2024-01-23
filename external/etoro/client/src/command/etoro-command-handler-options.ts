import { type CommandEventPair } from '@komore/client';
import { type CommandFromType } from '@komore/command';
import { type EventFromType } from '@komore/event';

import { type EToroApiClient } from '@/etoro';

import { type eToroCommand } from '../etoro.command';
import { type eToroEvent } from '../etoro.event';

/**
 * eToro command handler options
 */
export interface EToroCommandHandlerOptions {
  /**
   * eToro API client
   */
  readonly apiClient: EToroApiClient;
  /**
   * eToro events recorder
   */
  readonly toEvents: (
    pair: CommandEventPair<CommandFromType<typeof eToroCommand>, EventFromType<typeof eToroEvent>>
  ) => void;
}
