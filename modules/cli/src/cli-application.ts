import { type Application } from '@komore/application';

/**
 * Command-line interface application
 */
export type CliApplication = Application<ReadonlyArray<string>, never>;
