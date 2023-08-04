import { version } from 'os';

/**
 * Returns the operating system version
 *
 * @returns Operating system version
 */
export function getOSVersion(): string {
  return version();
}
