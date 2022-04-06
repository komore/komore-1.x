/**
 * Keys from a union
 *
 * ```ts
 * type Keys = KeysFromUnion<{ a: number } | { b: string }>;
 * // ^ Keys = 'a' | 'b'
 * ```
 *
 * @template U Union type
 */
export type KeysFromUnion<U> = U extends U ? keyof U : never;
