/**
 * Creates a function that, given an array or a count, generates a same-size array filled with a specific value
 *
 * @param value Value used to fill the array
 * @returns Function that, given an array or a count, generates a same-size array filled with the specific value
 */
export function arrayFilledWith<T>(value: T): (arrayOrLength: ReadonlyArray<unknown> | number) => Array<T> {
  return arrayOrLength => {
    const length = typeof arrayOrLength === 'number' ? arrayOrLength : arrayOrLength.length;
    return Array(length).fill(value);
  };
}
