/**
 * IPv6 string
 */
export type IPv6String = string & {
  readonly __tag_networkIPv6String: unique symbol;
};
