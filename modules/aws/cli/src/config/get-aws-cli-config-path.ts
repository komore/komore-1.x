import { getHomePath } from '@komore/node/file-system';
import { map } from '@komore/reactive';

import { homePathToAwsCliConfigPath } from './home-path-to-aws-cli-config-path';

/**
 * Returns the AWS CLI configuration path
 *
 * @returns AWS CLI configuration path
 */
export function getAwsCliConfigPath(): Observable<string> {
  return getHomePath().pipe(map(homePathToAwsCliConfigPath));
}
