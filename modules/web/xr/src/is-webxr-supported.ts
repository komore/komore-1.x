/**
 * Returns true if WebXR is supported
 *
 * @returns true if WebXR is supported
 */
export function isWebXrSupported() {
  return 'xr' in navigator;
}
