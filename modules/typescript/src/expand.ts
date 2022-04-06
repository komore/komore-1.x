/**
 * Expands a type
 *
 * ```ts
 * type Expanded = Expand<{ a: number } & { b: string }>;
 * // ^ Expanded = { a: number; b: string }
 * ```
 * @template T Type
 */
export type Expand<T> = T extends T ? { [K in keyof T]: T[K] } : never;
