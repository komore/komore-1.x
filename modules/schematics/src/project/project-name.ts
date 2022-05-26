/**
 * Project name
 */
export type ProjectName = string & {
  readonly __tag_projectName: unique symbol;
};
