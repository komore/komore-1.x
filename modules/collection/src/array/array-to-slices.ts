/**
 * Creates a function that turns an array into a list of array slices with a maximum size
 *
 * @param sliceSize Maximum size of a slice
 * @returns Function that turns an array into a list of array slices of maximum size `sliceSize`
 */
export function arrayToSlices(sliceSize: number): <T>(array: ReadonlyArray<T>) => Array<Array<T>> {
  return <T>(array: ReadonlyArray<T>) => {
    const chunks: Array<Array<T>> = [];

    for (let start = 0; start < array.length; start += sliceSize) {
      const chunk = array.slice(start, start + sliceSize);
      chunks.push(chunk);
    }

    return chunks;
  };
}
