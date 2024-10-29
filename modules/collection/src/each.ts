export function each<T, U>(project: (value: T, index: number) => U): (array: ReadonlyArray<T>) => Array<U> {
  // TODO: ReadonlyMap and ReadonlySet
  return array => array.map(project);
}
