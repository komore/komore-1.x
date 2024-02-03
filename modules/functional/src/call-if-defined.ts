export function callIfDefined<T, U>(func: (value: T) => U): (value: T | undefined) => U | undefined {
  return value => (value !== undefined ? func(value) : undefined);
}
