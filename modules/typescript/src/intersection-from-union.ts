/**
 * Intersection from a union
 *
 * ```ts
 * type Intersection = IntersectionFromUnion<{ a: number } | { b: string }>;
 * // ^ Intersection = { a: number } & { b: string }
 * ```
 *
 * @template U Union type
 */
export type IntersectionFromUnion<U> = (U extends U ? (u: U) => 0 : never) extends (i: infer I) => 0
  ? Extract<I, U>
  : never;
