/**
 * Returns a function that returns an export from a WebAssembly instance
 * @param exportName Export name
 * @returns Function that returns the export from a WebAssembly instance
 */
export function toWebAssemblyExport(exportName: string): (instance: WebAssembly.Instance) => WebAssembly.ExportValue {
  return instance => instance.exports[exportName];
}
