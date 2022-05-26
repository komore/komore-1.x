/**
 * Package name
 */
export type PackageName = string & {
  readonly _tag_packageName: unique symbol;
};
