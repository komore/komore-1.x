import { type PackageJson } from '@komore/node';

/**
 * package.json with schematics
 */
export interface PackageJsonWithSchematics extends PackageJson {
  /**
   * komore-specific package.json block
   */
  readonly komore: {
    readonly commands?: string;
    readonly executors?: string;
    readonly generators?: string;
  };
}
