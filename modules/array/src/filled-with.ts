
export function filledWith<T>(value: T): (array: ReadonlyArray<unknown>) => Array<T> {
  return array => Array(array.length).fill(value);
}
