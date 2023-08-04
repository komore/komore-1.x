import { type ReadonlyRecord } from '@komore/typescript';
import { type PackageJsonLink } from './package-json-link';
import { type PackageJsonPerson } from './package-json-person';

/**
 * package.json information
 */
export interface PackageJson {
  /**
   * Author
   */
  readonly author?: PackageJsonPerson;
  /**
   * Bug reporting information
   */
  readonly bugs: {
    /**
     * Email address for reporting bugs
     */
    readonly email?: string;
    /**
     * URL for reporting bugs
     */
    readonly url?: string;
  };
  /**
   * List of contributors
   */
  readonly contributors: ReadonlyArray<PackageJsonPerson>;
  /**
   * Dependencies
   */
  readonly dependencies: ReadonlyRecord<string, string>;
  /**
   * Description
   */
  readonly description?: string;
  /**
   * Development dependencies
   */
  readonly devDependencies: ReadonlyRecord<string, string>;
  /**
   * Funding information
   */
  readonly funding?: PackageJsonLink | ReadonlyArray<PackageJsonLink>;
  /**
   * Homepage
   */
  readonly homepage?: string;
  /**
   * List of keywords
   */
  readonly keywords: ReadonlyArray<string>;
  /**
   * License
   */
  readonly license?: string;
  /**
   * Package name
   */
  readonly name: string;
  /**
   * Peer dependencies
   */
  readonly peerDependencies: ReadonlyRecord<string, string>;
  /**
   * Whether the package is private
   */
  readonly private: boolean;
  /**
   * Scripts
   */
  readonly scripts: ReadonlyRecord<string, string>;
  /**
   * Repository information
   */
  readonly repository?: PackageJsonLink;
  /**
   * Package version
   */
  readonly version: string;
}
