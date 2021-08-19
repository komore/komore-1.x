import type { Host } from '@komore/runtime';
import type { NodeHostOptions } from './node-host-options';

/**
 * Node host
 */
export interface NodeHost extends Host {
  readonly options: NodeHostOptions;
}
