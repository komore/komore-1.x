import { type PackageName } from '../name/package-name';

/**
 * Package reference
 */
export interface PackageReference {
  /**
   * Exported entry name
   */
  readonly exportedEntryName: string;
  /**
   * Package name
   */
  readonly packageName: PackageName;
}
