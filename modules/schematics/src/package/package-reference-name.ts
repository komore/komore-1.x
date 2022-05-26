/**
 * Package reference name
 */
export type PackageReferenceName = `${string}#${string}` & {
  readonly __tag_packageReferenceName: unique symbol;
};
