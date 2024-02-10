import { ChangeLogGeneratorParameters } from './changelog-generator-parameters';

/**
 * Changelog generator
 */
export interface ChangeLogGenerator {
  (parameters: ChangeLogGeneratorParameters): Observable<void>;
}
