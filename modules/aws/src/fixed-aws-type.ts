import { type Expand } from '@komore/typescript';

/**
 * Fixed AWS type
 *
 * @template T AWS type
 * @template K Non-optional keys
 * @note This could be removed if https://github.com/aws/aws-sdk-js-v3/issues/1613 gets fixed
 * @private
 */
export type FixedAwsType<T, K extends keyof T = keyof T> = Expand<
  Omit<T, K> &
    Required<{
      readonly [P in K]: NonNullable<T[P]>;
    }>
>;
