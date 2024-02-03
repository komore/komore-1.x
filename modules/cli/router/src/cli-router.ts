import { type GenericCommand } from '@komore/command';

/**
 * Command-line interface router
 */
export interface CliRouter<CommandType extends GenericCommand> {
  (parameters$: Observable<ReadonlyArray<string>>): Observable<CommandType>;
}
