import { type Observable } from '@komore/reactive';
import { type Host } from '@komore/runtime/host';

/**
 * Application options
 *
 * @template HostType Host type
 */
export interface ApplicationOptions<HostType extends Host> {
  /**
   * Host
   */
  readonly host: HostType;
  /**
   * Application entry-point
   */
  readonly main: () => Observable<void>;
}
