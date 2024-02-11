import { type ChangeLogGeneratorParameters } from './change-log-generator-parameters';

/**
 * Change log generator
 */
export interface ChangeLogGenerator {
  (parameters: ChangeLogGeneratorParameters): Observable<void>;
}
