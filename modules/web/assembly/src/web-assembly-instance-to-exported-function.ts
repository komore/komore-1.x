/**
 * Returns a function that returns an exported function from a WebAssembly instance
 * @param functionName Function name
 * @returns Function that returns the exported function from a WebAssembly instance
 */
export function webAssemblyInstanceToExportedFunction<T extends () => unknown = () => unknown>(
  functionName: string
): (instance: WebAssembly.Instance) => T {
  return instance => instance.exports[functionName] as T;
}
