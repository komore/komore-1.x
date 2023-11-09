import { type GenericCommand } from '@komore/command';
import { type Observable } from '@komore/reactive';

/**
 * Command-line interface router
 */
export interface CliRouter<CommandType extends GenericCommand> {
  (parameters: ReadonlyArray<string>): Observable<CommandType>;
}
