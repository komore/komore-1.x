/**
 * Returns a function that returns an exported function from a WebAssembly instance
 * @param functionName Function name
 * @returns Function that retrns the exported function from a WebAssembly instance
 */
export function toWebAssemblyExportedFunction<T extends Function = Function>(
  functionName: string
): (instance: WebAssembly.Instance) => T {
  return instance => instance.exports[functionName] as T;
}
