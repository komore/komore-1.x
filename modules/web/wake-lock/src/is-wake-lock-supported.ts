/**
 * Tests whether the wake lock API is supported
 */
export function isWakeLockSupported(): boolean {
  return 'wakeLock' in navigator;
}
