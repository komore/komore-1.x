import { type Observable } from '@komore/reactive';

import { type OpenTofuCommand } from '../command/opentofu.command';
import { type OpenTofuEvent } from '../event/opentofu.event';
import { type OpenTofuVersion } from '../version/opentofu-version';

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
  execute(command: OpenTofuCommand): Observable<void>;
  // TODO
  query(query: unknown): Observable<unknown>;
  (command: OpenTofuCommand): Observable<unknown>;
}
