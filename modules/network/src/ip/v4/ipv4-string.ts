/**
 * IPv4 string
 */
export type IPv4String = `${number}.${number}.${number}.${number}` & {
  readonly __tag_networkIPv4String: unique symbol;
};
