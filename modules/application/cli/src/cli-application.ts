import { type Application } from '@komore/application';
import { type NodeHost } from '@komore/runtime/node';

/**
 * CLI application
 */
export type CliApplication = Application<NodeHost, ReadonlyArray<string>, number>;
