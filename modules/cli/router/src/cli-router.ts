import { type GenericCommand } from '@komore/command';
import { type Observable } from '@komore/reactive';

/**
 * Command-line interface router
 */
export interface CliRouter {
  // TODO: properly typed based on possible command types
  (parameters: ReadonlyArray<string>): Observable<GenericCommand>;
}
