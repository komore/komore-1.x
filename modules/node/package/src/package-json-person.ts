/**
 * package.json detailed person
 */
export interface PackageJsonDetailedPerson {
  readonly email?: string;
  readonly name: string;
  readonly url?: string;
}

/**
 * package.json simplified person
 */
export interface PackageJsonSimplifiedPerson {
  readonly author: string;
}

/**
 * package.json person
 */
export type PackageJsonPerson = PackageJsonDetailedPerson | PackageJsonSimplifiedPerson;
