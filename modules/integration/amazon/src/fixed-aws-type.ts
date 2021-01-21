/**
 * Fixed AWS type
 * @deprecated This should be removed once https://github.com/aws/aws-sdk-js-v3/issues/1613 is fixed
 */
export type FixedAwsType<T extends Record<string, any>, K extends keyof T> = T & {
  [P in K]: NonNullable<T[P]>;
};
