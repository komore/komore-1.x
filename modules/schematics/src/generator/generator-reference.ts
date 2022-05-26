import { type PackageName } from '../package/package-name';
import { type GeneratorName } from './generator-name';

/**
 * Generator reference
 */
export interface GeneratorReference {
  /**
   * Generator name
   */
  readonly generatorName: GeneratorName;
  /**
   * Package name
   */
  readonly packageName: PackageName;
}
