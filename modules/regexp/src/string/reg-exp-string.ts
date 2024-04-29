/**
 * Regular expression string
 */
export type RegExpString = string & {
  readonly __tag_regExpString: unique symbol;
};
