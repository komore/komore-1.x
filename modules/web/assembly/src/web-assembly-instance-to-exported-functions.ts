import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Creates a function that returns a list of exported functions from a WebAssembly instance
 * @param functionNames Function names
 * @returns Function that returns the exported functions from a WebAssembly instance
 */
export function webAssemblyInstanceToExportedFunctions<T extends ReadonlyRecord<string, () => void>>(
  functionNames: [...ReadonlyArray<keyof T>]
): (instance: WebAssembly.Instance) => T {
  // TODO: better typing (should only keep the names specified in the array)
  return instance =>
    functionNames.reduce((prev, functionName) => {
      prev[functionName] = instance.exports[functionName] as unknown as typeof prev[typeof functionName];
      return prev;
    }, {} as unknown as T);
}
