/**
 * Tests whether a buffer holds valid WebAssembly source
 * @param bytes Buffer source
 * @returns true if the bytes represent a valid WebAssembly source
 */
export function isValidWebAssemblySource(bytes: BufferSource): boolean {
  return WebAssembly.validate(bytes);
}
