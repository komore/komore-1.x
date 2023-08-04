/**
 * ISO 8601 date string
 */
export type DateString = string & {
  readonly __type_dateString: unique symbol;
};
