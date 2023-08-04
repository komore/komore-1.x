/**
 * Creates a function that flattens an array up to a specific depth
 *
 * @param depth Depth (defaults to 1)
 * @returns Function that flattens an array up to the specified depth
 */
export function arrayToFlattenedArray<Depth extends number = 1>(
  depth?: Depth
): <ArrayType extends ReadonlyArray<unknown>>(array: ArrayType) => Array<FlatArray<ArrayType, Depth>> {
  return array => array.flat(depth);
}
