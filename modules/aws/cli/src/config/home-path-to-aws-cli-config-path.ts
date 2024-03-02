import { join } from 'node:path';

/**
 * Returns the AWS CLI configuration path, given a home path
 *
 * @param homePath Home path
 * @returns AWS CLI configuration path
 * @private
 */
export function homePathToAwsCliConfigPath(homePath: string): string {
  return join(homePath, '.aws', 'config');
}
