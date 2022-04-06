/**
 * Intersection from a union
 *
 * @template U Union type
 */
export type IntersectionFromUnion<U> = (U extends U ? (u: U) => 0 : never) extends (i: infer I) => 0
  ? Extract<I, U>
  : never;
