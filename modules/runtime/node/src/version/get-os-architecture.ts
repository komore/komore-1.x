import { arch } from 'os';

/**
 * Returns the operating system architecture
 *
 * @returns Operating system architecture
 */
export function getOSArchitecture(): string {
  return arch();
}
