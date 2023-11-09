import { type CommandFromType } from '@komore/command';
import { type Observable } from '@komore/reactive';

import { openTofuCommand } from '../opentofu.command';
import { type OpenTofuEvent } from '../opentofu.event';
import { type OpenTofuVersion } from '../version/opentofu-version';
import { openTofuQuery } from '../opentofu.query';

/**
 * OpenTofu client
 */
export interface OpenTofuClient {
  /**
   * Stream of events caused by the OpenTofu client
   */
  readonly events: Observable<OpenTofuEvent>;
  /**
   * OpenTofu version
   */
  readonly version: Observable<OpenTofuVersion>;
  /**
   * Executes an OpenTofu command
   *
   * @param command OpenTofu command
   */
  execute(command: CommandFromType<typeof openTofuCommand>): Observable<void>;
  // TODO
  query(query: QueryFromType<typeof openTofuQuery>): Observable<unknown>;
  (command: CommandFromType<typeof openTofuCommand>): Observable<unknown>;
}
