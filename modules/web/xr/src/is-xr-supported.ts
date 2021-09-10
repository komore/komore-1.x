/**
 * Returns true if WebXR is supported
 * @returns true if WebXR is supported
 */
export function isXrSupported() {
  return 'xr' in navigator;
}
