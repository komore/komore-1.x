/**
 * Creates a function that returns an export from a WebAssembly instance
 *
 * @param exportName Export name
 * @returns Function that returns the export from a WebAssembly instance
 */
export function webAssemblyInstanceToExport(
  exportName: string
): (instance: WebAssembly.Instance) => WebAssembly.ExportValue | undefined {
  return instance => instance.exports[exportName];
}
