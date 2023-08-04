/**
 * ISO 8601 date and time string
 */
export type DateTimeString = string & {
  readonly __type_dateTimeString: unique symbol;
};
