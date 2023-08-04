import { type HostOptions } from '@komore/runtime';

/**
 * Node host options
 */
export interface NodeHostOptions extends HostOptions {
  readonly exitTimeout: number;
}
