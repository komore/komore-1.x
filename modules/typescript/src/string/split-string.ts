/**
 * Splits a string
 *
 * @template Str String
 * @template Delimiter Delimiter
 */
export type SplitString<
  Str extends string,
  Delimiter extends string,
  Current extends string = '',
  Result extends ReadonlyArray<string> = [],
> = Str extends `${infer Head}${infer Tail}`
  ? Head extends Delimiter
    ? SplitString<Tail, Delimiter, '', [...Result, Current]>
    : SplitString<Tail, Delimiter, `${Current}${Head}`, Result>
  : [...Result, Str];
