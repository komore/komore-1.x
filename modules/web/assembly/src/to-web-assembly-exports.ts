import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Returns a function that returns a list exports from a WebAssembly instance
 * @param exportNames Export names
 * @returns Function that returns the list of exports from a WebAssembly instance
 */
export function toWebAssemblyExports<ExportNames extends ReadonlyArray<string>>(
  exportNames: readonly [...ExportNames]
): (instance: WebAssembly.Instance) => ReadonlyRecord<ExportNames[number], WebAssembly.ExportValue> {
  const initialValue = {} as unknown as Record<ExportNames[number], WebAssembly.ExportValue>;
  return instance =>
    exportNames.reduce((acc, exportName) => {
      acc[exportName] = instance.exports[exportName];
      return acc;
    }, initialValue);
}
