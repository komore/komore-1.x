/**
 * UUID
 */
export type UUID = string & {
  readonly __tag_uuid: unique symbol;
};
