/**
 * package.json detailed link
 */
export interface PackageJsonDetailedLink {
  readonly type: string;
  readonly url: string;
}

/**
 * package.json link
 */
export type PackageJsonLink = PackageJsonDetailedLink | string;
