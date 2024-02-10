/**
 * Git tag name
 */
export type GitTagName = string & {
  readonly __tag_gitTagName: unique symbol;
};
