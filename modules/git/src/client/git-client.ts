import { type CommandFromType } from '@komore/command';
import { type EventFromType } from '@komore/event';
import { type Observable } from '@komore/reactive';

import { type gitCommand } from '../git.command';
import { type gitEvent } from '../git.event';

/**
 * git client
 */
export interface GitClient {
  /**
   * Events caused by the client
   */
  readonly events: Observable<EventFromType<typeof gitEvent>>;
  /**
   * Logs caused by the client
   */
  readonly logs: Observable<unknown>;
  /**
   * Executes a command
   *
   * @param command Command
   * @returns Observable that emits once the command has completed
   */
  execute(command: CommandFromType<typeof gitCommand>): Observable<void>;
}
