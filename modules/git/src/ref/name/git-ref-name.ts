/**
 * Git ref name
 */
export type GitRefName = string & {
  readonly __tag_gitRefName: unique symbol;
};
