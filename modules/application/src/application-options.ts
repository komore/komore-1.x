import { type Host } from '@komore/runtime';

/**
 * Application options
 */
export interface ApplicationOptions<HostType extends Host> {
  /**
   * Host
   */
  readonly host: HostType;
}
