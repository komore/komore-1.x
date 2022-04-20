import { type ReadonlyRecord } from '@komore/typescript';

/**
 * package.json information
 */
export interface PackageJson {
  readonly bugs: {
    readonly url: string;
  };
  readonly dependencies: ReadonlyRecord<string, string>;
  readonly devDependencies: ReadonlyRecord<string, string>;
  readonly homepage: string;
  readonly license: string;
  readonly name: string;
  readonly peerDependencies: ReadonlyRecord<string, string>;
  readonly private: boolean;
  readonly scripts: ReadonlyRecord<string, string>;
  readonly repository: {
    readonly type: string;
    readonly url: string;
  };
  readonly version: string;
}
