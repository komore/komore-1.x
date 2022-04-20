import { type Expand } from '@komore/typescript';

/**
 * Fixed AWS type
 *
 * @template T AWS type
 * @template K Non-optional keys
 * @deprecated This should be removed once https://github.com/aws/aws-sdk-js-v3/issues/1613 is fixed
 */
export type FixedAwsType<T, K extends keyof T> = Expand<
  Omit<T, K> &
    Required<{
      [P in K]: NonNullable<T[P]>;
    }>
>;
