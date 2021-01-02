/**
 * Imports the first available module from a list of modules
 * @param moduleNames Module names
 * @returns First available module
 */
export async function importFirst<T extends ReadonlyArray<string>>(...moduleNames: T) {
  for (const moduleName of moduleNames) {
    try {
      return await import(moduleName);
    } catch {}
  }

  throw new Error(`No module found: ${moduleNames.join(', ')}`);
}
